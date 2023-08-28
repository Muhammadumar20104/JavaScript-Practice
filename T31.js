var a = 5;
var call=main(a)
console.log(call(5))

function main(a) {
    return function child(b) {
        return a + b;
    }
}