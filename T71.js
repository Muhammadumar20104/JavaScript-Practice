var obj = {
    "John": 30,
    "Alice": 25,
    "Bob": 40
};
var n = 5;
console.log(AGE(obj, n))
function AGE(obj, n) {
    var obj1 = {}
    for (var key in obj) {

        // console.log({ key: obj[key] })
        obj1[key] = obj[key] + n

    }
    return obj1
}

