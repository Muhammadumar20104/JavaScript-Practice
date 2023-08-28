var name = []
var users = [
    { name: "John", email: "john@example.com" },
    { name: "Jason", email: "jason@example.com" },
    { name: "Jeremy", email: "jeremy@example.com" },
    { name: "Jacob", email: "jacob@example.com" }
]
console.log(Destruct(users, name))
function Destruct(users, name) {
    for (let i = 0; i < users.length; i++) {
        name.push(users[i].name)

    }
    return name
}