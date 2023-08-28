var arr = [10, 0, 0, 50]
var price = 3.85
console.log(cal(arr, price))
function cal(arr, price) {
    var a = 0;
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i])
        if (i == 0) {
            a += arr[i] * 0.25;
        }
        else if (i == 1) {
            a += arr[i] * 0.10;
        }
        else if (i == 2) {
            a += arr[i] * 0.05;
        }
        else if (i == 3) {
            a += arr[i] * 0.01;
        }
    }
    if (a >= price) {
        console.log("Ap Item le sakh te hai ")
        return true;
    }
    else {
        console.log("Ap item ni le sakh te hai")
        return false;
    }

}