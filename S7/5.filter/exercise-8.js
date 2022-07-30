const streamers = [{name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft'}, {name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends'}, {name: 'Reven', age: 43, gameMorePlayed: 'League of Legends'}, {name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us'}];

const btn = document.querySelector('button')
const input = document.querySelector('input')


function handleEvent (event) {
  console.log(event)
  const streamersName = streamers.filter(function (streamer) {
    if (streamer.name.toLowerCase().includes(input.value.toLowerCase())) {
      return streamer
    }
  })
  console.log(streamersName)
}

btn.addEventListener('click', handleEvent)