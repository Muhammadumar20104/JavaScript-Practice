
function Diff(obj, obj1) {
    var key1 = Object.keys(obj)
    var key2 = Object.keys(obj1)
    if (key1.length !== key2.length) {
        return false;
    }
    for (var  key in key1) {
        console.log(key)
        if (obj[key] !== obj1[key]) {
            return false;
        }
    }
    
    return true;
}
var obj = { name: "umar", age: 22 }
var obj1 = { name: "umar", age: 22 }
console.log(Diff(obj, obj1))
  

