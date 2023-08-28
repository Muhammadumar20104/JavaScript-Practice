var obj = { a: 1, b: 2 }
console.log(array(obj))
function array(obj) {
    var b=[]
    for (var key in obj) {
        if (obj.hasOwnProperty(key)) {
            // console.log(key)
            console.log(obj[key])
            b.push([key, obj[key]]);
          }

    }
    return b;
}
