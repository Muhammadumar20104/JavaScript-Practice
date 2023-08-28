var num=5;
console.log(Triangle(num))
function Triangle (num) {
    var a=0;
    for (let i = 1; i <= num; i++) {
        a +=i
        
    }
    return a;
    
}