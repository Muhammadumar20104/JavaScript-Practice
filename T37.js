var arr = [2, 4, 6, 8]
console.log(Fun(arr))
function Fun(arr) {
    var a = 0;
    for (let i = 0; i < arr.length; i++) {
        if (i == 0) {
            a=arr[i]
            return a += arr[i] * 0.25;
        }
        else if (i == 1) {
            return a += arr[i] * 0.10;
        }
        else if (i == 2) {
            return a += arr[i] * 0.05;
        }
        else {
            return a += arr[i] * 0.01
        }
    }
    return a;
}