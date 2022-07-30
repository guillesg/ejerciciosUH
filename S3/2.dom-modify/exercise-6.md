Basandote en el siguiente array crea una lista ul > li con los textos del array.

```js
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const newDiv = document.createElement('div')
const ul = document.createElement('ul')

newDiv.appendChild(ul)

for (let i = 0; i < apps.length; i++) {
    const newLi = document.createElement('li')
    ul.appendChild(newLi)

    newLi.textContent = apps[i]
}

body.document.appendChild(newDiv)
```