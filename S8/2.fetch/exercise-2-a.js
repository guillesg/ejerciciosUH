const button$ = document.querySelector('button');
const baseUrl = 'https://api.nationalize.io?name=';

const btnConsult = document.querySelector('button')
const input = document.querySelector('input')

const doFetch = () => {
    fetch(baseUrl + input.value)
    .then(res => res.json())
    .then(res => console.log(res))
}

btnConsult.addEventListener('click', doFetch)
