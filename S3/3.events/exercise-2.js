function inputInfo(event) {
    console.log(event)
}

const input = document.querySelector('input')

input.addEventListener('focus', inputInfo)