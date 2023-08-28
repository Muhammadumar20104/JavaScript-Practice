var obj = { b: 2, a: 1, c: 3 }
// console.log(array(obj))
var d = array(obj)
console.log(d.keys)
console.log(d.values)
function array(obj) {
    // var a = []
    var b = []
    var c = []
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            console.log(b.push(key))
            b.sort()
            c = b.map((key) => obj[key]
            )
        }

    }
    return {
        keys: b,
        values: c
    };
}