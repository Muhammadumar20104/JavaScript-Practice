let users = [
    { name: "John", email: "john@example.com" },
    { name: "Jason", email: "jason@example.com" },
    { name: "Jeremy", email: "jeremy@example.com" },
    { name: "Jacob", email: "jacob@example.com" }
]
var [user1, user2, user3, user4] = users
var {name:name1, email:email1} = users[2]
var third = users.filter((e, i) => i == 2)[0].name
console.log(name1)