var arr =["abc", "ab10c", "a10bc", "bcd"]
console.log(name(arr))
function name(arr) {
    var new1 = []
    arr.forEach(element => {
        for (let i = 0; i < element.length; i++) {
            console.log(parseInt(element[i]))
            if (!isNaN(parseInt(element[i]))) {
                new1.push(element)
            }
        }
    });
    return new1
}