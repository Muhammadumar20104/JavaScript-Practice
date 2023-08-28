function f() {
    var a = 30
    return a;
}
console.log(f())
function g() {
    var a 
    return 3
}
console.log(g())
console.log(main(f(), g()))
function main(f1, f2) {
    if (f1 > f2) {
        return "f";
    }
    else if (f2 > f1) {
        return "g";
    }
    else {
        return "nethier";
    }
}
