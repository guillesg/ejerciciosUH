const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const adultArray = []

const adult = ages.filter(function (age) {
    if (age > 18) {
        adultArray.push(age)
    }
})

console.log(adultArray)