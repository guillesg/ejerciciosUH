const container$$ = document.getElementById('charactersContainer')
const arena = document.createElement('div')

fetch('http://localhost:3000/characters').then(res => res.json()).then(res => createCharacters(res))

function createCharacters(characters) {
    for (let character of characters) {
        const divCharacter$$ = document.createElement('div')
        const img$$ = document.createElement('img')
        const nameP$$ = document.createElement('p')
        const btnDelete$$ = document.createElement('button')

        
        nameP$$.textContent = character.name
        img$$.src = character.avatar
        img$$.classList.add('images')
        
        btnDelete$$.textContent = 'Eliminar'

        divCharacter$$.appendChild(img$$)
        divCharacter$$.appendChild(nameP$$)
        divCharacter$$.appendChild(btnDelete$$)
        container$$.appendChild(divCharacter$$)

        img$$.addEventListener('click', (e) => {
            selectFighters(character, e.target)
        })

        btnDelete$$.addEventListener('click', (e) => {
            deleteCharacter(character)
        })
    }
}

function deleteCharacter(character) {
    fetch('http://localhost:3000/characters/' + character.id, {
        method: 'DELETE',
    })
    .then(res => res.json()) 
    .then(res => console.log(res))
}

let charactersSelected = []

function selectFighters(target) {
    charactersSelected.push(target)
    

    if (charactersSelected.length === 2) {
        const btnsContainer$$ = document.createElement('div')

        const btnFight$$ = document.createElement('button')
        btnFight$$.classList.add('btnfight')
        btnFight$$.textContent = 'A luchar!'
        btnFight$$.addEventListener('click', (e) => {
            readyToFight(target, charactersSelected)
        })
        btnsContainer$$.appendChild(btnFight$$)

        const resetFight$$ = document.createElement('button')
        resetFight$$.classList.add('btnfight')
        resetFight$$.textContent = 'Elegir de nuevo'
        resetFight$$.addEventListener('click', (e) => {
            resetFight(e, btnsContainer$$)
        })
        btnsContainer$$.appendChild(resetFight$$)

        container$$.appendChild(btnsContainer$$)
        console.log(charactersSelected)
    }
}

function readyToFight(character) {
    const random = Math.floor(Math.random() * 2)

    if (random === 1) {
        fight(charactersSelected[0], charactersSelected[1])
    }
    else {
        fight(charactersSelected[1], charactersSelected[0])
    }
}

function fight(fighter, defender) {
    let damage = 0

    for (let dice of fighter.damage) {
        damage += rollDice(dice, fighter.critic)
    }

    finalDamage(damage, defender)

    if (defender.vitality > 0) {
        setTimeout(() => { 
            fight(fighter, defender)
            
        }, 250)

        console.log(`${fighter.name} pegando`)
        console.log(`${defender.name} vida: ${defender.vitality}`)

        const pFighter$$ = document.createElement('p')
        pFighter$$.textContent = `${fighter.name} pegando`
        const pDefender$$ = document.createElement('p')
        pDefender$$.textContent = `${defender.name} vida: ${defender.vitality}`     
        arena.appendChild(pFighter$$)
        arena.appendChild(pDefender$$)

    }

    if (defender.vitality < 0) {
        const pFighter$$ = document.createElement('p')
        pFighter$$.textContent = `${fighter.name} pegando`
        const finishP$$ = document.createElement('p')
        finishP$$.textContent = `${defender.name} vida: 0`
        arena.appendChild(pFighter$$)
        arena.appendChild(finishP$$)
        console.log(`${fighter.name} pegando`)
        console.log(`${defender.name} vida: 0`)
    }
    container$$.appendChild(arena)
}

function finalDamage(damage, defender) {
    const finalDamage = damage - defender.defense
    defender.vitality -= finalDamage
}

function rollDice(dice, critic) {
    const whereIsD = dice.indexOf('d')

    const roll = dice.substring(0, whereIsD)
    const sides = dice.substring(whereIsD + 1)

    let diceDamage = 0

    for (let i = 0; i < roll; i++) {
        let rollDamage = Math.floor(Math.random() * Number(sides)) + 1
        diceDamage += rollDamage === critic ? rollDamage * 2 : rollDamage
    }

    return diceDamage
}

function resetFight(event, container) {
    charactersSelected = []
    container.remove()
    arena.remove()
}

const form = document.querySelector('form')

form.addEventListener('submit', getData)

function getData(event) {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(form).entries());

    data.defense = Number(data.defense)
    data.critic = Number(data.critic)
    data.vitality = Number(data.vitality)

    data.damage = data.damage.split(',')

    console.log(data)

    fetch('http://localhost:3000/characters', {
        method: 'POST',
        headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(res => console.log(res));
}