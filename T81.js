var Item = { piano: "200" }
console.log(name(Item))
function name(Item) {
    var obj = {}
    for (const key in Item) {
        obj[key] = parseInt(Item[key])
    }
    return obj
}