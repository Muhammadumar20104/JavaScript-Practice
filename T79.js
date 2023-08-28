var obj={ "a": 1, "b": 2, "c": 3 }
console.log(name(obj))
function name(obj) {
    var obj1={}
    for (const key in obj) {
        obj1[obj[key]]=key
    }
    return obj1
}