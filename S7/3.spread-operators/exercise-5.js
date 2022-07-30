const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colorsNoYellow = [...colors]

colorsNoYellow.splice(2, 1)

console.log(colors)
console.log(colorsNoYellow)
