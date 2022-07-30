const baseUrl = 'http://localhost:3000/'
const planets$$ = document.getElementById('planets')
const search$$ = document.getElementById('search')
const characters$$ = document.getElementById('characters')











initialize()
function initialize() {
    fetch(baseUrl + 'planets').then(response => response.json()).then(planets => {
        for (let planet of planets) {
            const planet$$ = document.createElement('div')
            planet$$.innerHTML = `<img height="200" src="${planet.image}"/> <h2>${planet.name}<h2/>`
    
            planet$$.addEventListener('click', () => clickPlanet(planet.id))
        
            planets$$.appendChild(planet$$)
        }
    })
}

let clickedPlanetCharacter = []

function clickPlanet(planetId) {
    characters$$.innerHTML = ''
    search$$.innerHTML = ''
    
    fetch(baseUrl + 'characters?idPlanet=' + planetId).then(res => res.json()).then(characters => {
        clickedPlanetCharacter = characters
        showCharacters(characters)
        search()
    })
}

function search() {
    const inputSearch$$ = document.createElement('input')
    const btnSearch$$ = document.createElement('button')

    btnSearch$$.textContent = 'Buscar'

    btnSearch$$.addEventListener('click', () => searchCharacter(inputSearch$$.value))
    search$$.appendChild(inputSearch$$)
    search$$.appendChild(btnSearch$$)
}

function showCharacters(characters) {
    for (let character of characters) {
        const character$$ = document.createElement('div')

        character$$.innerHTML = `<img src="${character.avatar}" /> <p>${character.name}<p/>`
        characters$$.appendChild(character$$)
    }
}

function searchCharacter(inputValue) {
    const filteredCharacters = clickedPlanetCharacter.filter((charactersSelected) => charactersSelected.name.toLowerCase() === inputValue.toLowerCase())
    characters$$.innerHTML = ''

    showCharacters(filteredCharacters)
}