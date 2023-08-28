var num = 67;
console.log(Rep(num))
function Rep(num) {
    var a = num.toString();
    console.log(a.length)
    console.log(new Set(a).size===1)
    if (new Set(a).size===1) {
        return true
    }
    else {
        return false
    }



}