
var num=12;
var len=10;
console.log(Multiple(num,len))
function Multiple (num,len) {
    var arr=[]
    for (let i = 1; i <= len; i++) {
        arr.push(i*num)
    }
    return arr;
}