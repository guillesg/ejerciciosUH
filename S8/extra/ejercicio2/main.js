fetch('http://localhost:3000/diary').then(response => response.json()).then(diary => {
    const orderNotes = orderMess(diary)
    createOrderDiary(orderNotes)
})


const orderMess = (diary) => {    
    return diary.sort((date1, date2) => new Date(date1.date) - new Date(date2.date))
}

const createOrderDiary = (orderNotes) => {
    for (let note of orderNotes) {
        const newDiv = document.createElement('div')
        const newH3 = document.createElement('h3')
        const newH5 = document.createElement('h5')
        const newP = document.createElement('p')
        const removeBtn = document.createElement('button')

        newDiv.innerHTML = `<h3>${note.title}</h3><h5>${note.date}</h5><p>${note.description}</p>`

        removeBtn.addEventListener('clcik', removeNote)

        document.body.appendChild(newDiv)
    }
}

const removeNote = (note) => {
    note.remove()
}