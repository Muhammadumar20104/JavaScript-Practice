var mile = [-6, 15, 4]
console.log(Marathon(mile))
function Marathon(mile) {
    var b = 0;
    for (let i = 0; i < mile.length; i++) {
        if (mile[i] < 0) {
            mile[i] = -mile[i]
        }
        b += mile[i]
    }
    return b;
}
