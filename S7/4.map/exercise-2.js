// const users = [{ id: 1, name: 'Abel' }, { id: 2, name: 'Julia' }, { id: 3, name: 'Pedro' }, { id: 4, name: 'Amanda' }];

// const newUsersName = users.map(user => user.name[0] === 'A' ? 'Anacleto' : user.name);
// // const newUsersName = users.map(user => { return user.name[0] === 'A' ? 'Anacleto' : user.name});

// console.log(newUsersName);


const users = [{id: 1, name: 'Abel'}, {id:2, name: 'Julia'},{id:3, name: 'Pedro'}, {id:4, name: 'Amanda'}];
let userArray = []

const newUser = users.map(function (user) {
    if (user.name[0] === 'A') {
        user.name = 'Anacleto'
    }
    userArray.push(user.name)
})

console.log(usersArray)