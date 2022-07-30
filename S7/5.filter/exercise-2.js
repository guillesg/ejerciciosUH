const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const agePar = ages.filter(function (age) {
    if (age % 2 === 0) {
        return age
    }
})

console.log(agePar)