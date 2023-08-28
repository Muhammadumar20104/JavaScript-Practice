var obj = { a: 1, b: 2, c: 3 }
console.log(intoArray(obj))
function intoArray(obj) {
    var c = [];
    var b = [];
    var a = []
    for (var key in obj) {
        c.push(key)
        b.push(obj[key])
    }
    return a.concat([c],[b])
    // return c.concat([b])
}