const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const input = document.querySelector('input')

const inputChange = function (event) {
  console.log(event)
  const streamerName = streamers.filter(function (streamer) {
    if (streamer.name.toLowerCase().includes(input.value.toLowerCase())) {
      return streamer.name
    }
})
console.log(streamerName)
}

input.addEventListener('input', inputChange)