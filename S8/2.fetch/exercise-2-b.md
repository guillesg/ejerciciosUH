En base al ejercicio anterior. Crea dinamicamente un elemento <p> por cada petición a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.

EJ: El nombre Abel tiene un 22 porciento de ser de ET y un 6 porciento de ser de MZ.


```js
const baseUrl = 'https://api.nationalize.io?name='
const input = document.querySelector('input')

function doFetch() {
    fecth(baseUrl + input.value)
    .then(res => res.json())
    .then(res => createParagraph(name))
}

function createParagraph(name) {
    const text = document.createElement('p')
    text.textContent = `El nombre ${name.name}`
    

    for ( let country of name.country) {
        let percent = Math.floor(country.probability * 100)
        text += `tiene un ${percent}% de ser de ${country.country_id}`
    }

    document.body.appendChild(text)
}
```