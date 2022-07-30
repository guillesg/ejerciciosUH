const allDiv$$ = document.querySelectorAll('.fn-insert-here');

for (const div$$ of allDiv$$) {
    const p$$ = document.createElement('p');
    p$$.textContent = 'Voy dentro!';
    div$$.appendChild(p$$);
}


const divInsert = document.querySelectorAll('.fn-insert-here')

for (let i = 0; i < divInsert.length; i++) {
    const newP = document.createElement('p')
    newP.textContent = 'Voy dentro!'
    divInsert.appendChild(newP)
}