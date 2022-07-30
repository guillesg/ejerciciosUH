const baseUrl = 'https://api.agify.io?name=michael'

fetch(baseUrl)
.then(res => res.json)
.then(res => console.log(res))