const baseUrl = 'https://api.nationalize.io?name='
const input = document.querySelector('input')

function doFetch() {
    fetch(baseUrl + input.value)
    .then(res => res.json())
    .then(res => createParagraph(res))
}

function createParagraph(person) {
    const text = document.createElement('p')
    text.textContent = `El nombre ${person.name} `
    

    for (let country of person.country) {
        let percent = Math.floor(country.probability * 100)
        text.textContent += `tiene un ${percent}% de ser de ${country.country_id} `
    }

    document.body.appendChild(text)
}

const btn = document.querySelector('button')
btn.addEventListener('click', doFetch)