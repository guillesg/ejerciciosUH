Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'.

const newP = document.createElement('p')
document.body.appendChild(newP)

newP.textContent = 'Soy dinámico'