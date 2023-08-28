
console.log(name(5, 5))
function name(a, b) {
    var matrix = []
    var count = 1;
    for (let i = 0; i < a; i++) {
        var row = []
        for (let j = 0; j < b; j++) {
            row.push(count)
            count++
        }
        matrix.push(row)
    }
    return matrix

}