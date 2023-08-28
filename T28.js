var n=4;
console.log(path(n))
function path (n) {
    var path=1;
    for (let i = 1; i <= n; i++) {
        path *=i;
    }

    return path
}