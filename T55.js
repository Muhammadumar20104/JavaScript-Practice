var arr = [1, 2, 3, 4, 5]
console.log(Multi(arr))
function Multi(arr) {
    var a = 0;
    for (let i = 0; i < arr.length; i++) {
        a += arr[i] * i
    }
    return a;

}