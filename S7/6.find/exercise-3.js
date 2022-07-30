const aliens = [{name: 'Zalamero', planet: 'Eden', age: 4029},{name: 'Paktu', planet: 'Andromeda', age: 32},{name: 'Cucushumushu', planet: 'Marte', age: 503021}];

const mutations = [{name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor'},{name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna'},{name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer'}];

const cucushumushuAlien = aliens.find(function (alien) {
    if (alien.name === 'Cucushumushu') {
        return alien
    }
})

const porompomperoMutation = mutations.find(function (mutation) {
    if (mutation.name === 'Porompompero') {
        return mutation
    }
})



const newAlien = {...cucushumushuAlien, mutation: {...porompomperoMutation}}

console.log(newAlien)