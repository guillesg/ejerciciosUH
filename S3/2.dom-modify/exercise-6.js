// const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

// const ul$$ = document.createElement('ul');

// for (let index = 0; index < apps.length; index++) {
//     const app = apps[index];
//     const li$$ = document.createElement('li');
//     li$$.textContent = app;
// }

// document.body.appendChild(ul$$);

const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];

const newDiv = document.createElement('div')
const ul = document.createElement('ul')

document.newDiv.appendChild(ul)

for (let i = 0; i < apps.length; i++) {
    const newLi = document.createElement('li')
    ul.appendChild(newLi)

    newLi.textContent = apps[i]
}

document.body.appendChild(newDiv)