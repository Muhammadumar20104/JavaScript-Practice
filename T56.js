var arr = [4, 3, 1,2]
var str = "Asc"
console.log(Sort(arr, str))
function Sort(arr, str) {
    if (str == "Asc") {
        arr.sort((a, b) => a - b)
    }
    else if (str == "Des") {
        arr.sort((a, b) => b - a)
    }
    else {
        arr
    }
    return arr
}