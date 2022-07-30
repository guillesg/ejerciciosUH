Inserta dinamicamente en un html un div que contenga una p con javascript.
```js
const newDiv = document.createElement('div')
const newP = document.createElement('p')

newDiv.appendChild(newP)
document.body.appendChild(newDiv)
```