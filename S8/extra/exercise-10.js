const baseUrl = 'http://localhost:3000'
const gallery$$ = document.createElement('div')
let numberPage = 1
// let array = []

initialize()
function initialize () {
    fetch(baseUrl + '/characters?_page=' + numberPage + '&_limit=5').then(response => response.json()).then(characters => {
        // array.push(characters)
        gallery$$.innerHTML = ""
        for (let character of characters) {
            const characterDiv$$ = document.createElement('div')
            characterDiv$$.innerHTML = `<h2>${character.name}<h2/><img height="200" src="${character.image}"/>`
            gallery$$.appendChild(characterDiv$$)
        }

        const btn$$ = document.createElement('button')
        btn$$.innerHTML = 'Siguiente'
        btn$$.addEventListener('click', () => addNextFive(characters.id))
        gallery$$.appendChild(btn$$)
    })
}

document.body.appendChild(gallery$$)

function addNextFive () {
    numberPage++

    fetch(baseUrl + '/characters?_page=' + numberPage + '&_limit=5').then(response => response.json()).then(characters => {
        // array.push(characters)

        for (let character of characters) {
            const characterDiv$$ = document.createElement('div')
            characterDiv$$.innerHTML = `<h2>${character.name}<h2/><img height="200" src="${character.image}"/>`
            gallery$$.appendChild(characterDiv$$)
        }
        
        const btn$$ = document.createElement('button')
        btn$$.innerHTML = 'Siguiente'
        btn$$.addEventListener('click', () => addNextFive(characters.id))
        
        if (numberPage <= 3){
            gallery$$.appendChild(btn$$)
        }
    })
}

