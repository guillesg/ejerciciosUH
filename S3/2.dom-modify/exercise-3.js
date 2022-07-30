// const div$$ = document.createElement('div');

// for (let index = 0; index < 6; index++) {
//     const p$$ = document.createElement('p');
//     div$$.appendChild(p$$);
// }

// document.body.appendChild(div$$);

const newDiv = document.createElement('div')

for (let i = 0; i < 6; i++) {
    const newP = document.createElement('p')
    newDiv.appendChild(newP)
}

document.body.appendChild(newDiv)