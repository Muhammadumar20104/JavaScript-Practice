var a = [16, 3.5, 6]
console.log(name1(a));
function name1(a) {
    var n = 0
    a.map((item) => {
        n += item

    })
    console.log(`${n} ohms`)
    return `"${n} ohms"`
}