// const removeMeAll$$ = document.querySelectorAll('.fn-remove-me');

// for (const removeMe$$ of removeMeAll$$) {
//     removeMe$$.remove();
// }

const removeP = document.querySelectorAll('.fn-remove-me')

for (let item of removeP) {
    item.remove()
}