Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript.

const newDiv = document.createElement('div')

for (let i = 0; i < 6; i++) {
    const newP = document.createElement('p')
    newDiv.appendChild(newP)
}

document.body.appendChild(newDiv)

