var arr = [[true, false], [false, false]]
console.log(flatten(arr))
function flatten(arr) {
    arr.flat();
    var arr2 =arr.flat(Infinity)
    return arr2
}