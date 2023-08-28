var a=9
console.log(functionName(a));
// console.log()
function functionName(a) {
    var n=0;
    for (let i = 0; i <= a; i++) {

        n = i ** 2 + n;
    }
   return n;

}
