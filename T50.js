var arr = ["x", "y"]
console.log(Clone(arr))
function Clone(arr) {
    var b = [];
    for (let i = 0; i < arr.length; i++) {

        b.push(arr[i])
    }
    b.push(arr);
    return b
}