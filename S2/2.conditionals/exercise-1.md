Comprueba en cada uno de los usuarios que tenga almenos dos trimestres aprobados y añade la propiedad isApproved a true o false en consecuencia. Una vez lo tengas compruebalo con un console.log.

```js
const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, {name: 'Lucia Aranda', T1: true, T2: false, T3: true}, {name: 'Abel Cabeza', T1: false, T2: true, T3: true}, {name: 'Alfredo Blanco', T1: false, T2: false, T3: false}, {name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

for (let i = 0; i < alumns.length; i++) {
    let aproved

    if (alumns.T1 == true) {
        aproved += 1
    }
    if (alumns.T2 == true) {
        aproved += 1
    }
    if (alumns.T3 == true) {
        aproved += 1
    }

    if (aproved >= 2) {
        alumns[i]['isApproved'] = true
    }
}
```