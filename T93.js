var str = "tesh"
console.log(name(str))
function name(str) {
    var arr = []
    var str2 = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < str.length; i++) {
        var index = str2.indexOf(str[i])
        index = index + 1
        console.log(index)
        if (index % 2 == 0) {
            arr.push(false)
        }
        else {
            arr.push(true)
        }
    }

    return arr
}