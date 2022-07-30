const cities = [{isVisited:true, name: 'Tokyo'}, {isVisited:false, name: 'Madagascar'},{isVisited:true, name: 'Amsterdam'}, {isVisited:false, name: 'Seul'}];
let citiesNames = []

const city = cities.map(function (cityName) {
    if (cityName.isVisited === true) {
        cityName.name = cityName.name + '(Visitado)'
    }
    citiesNames.push(cityName.name)
})

console.log(citiesNames)