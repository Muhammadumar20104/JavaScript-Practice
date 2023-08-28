var arr = [1, 2, 3, 4, 5, true]
console.log(sum(arr))
function sum(arr) {
    var a = 0;
    for (let i = 0; i < arr.length; i++) {

        if (Number.isInteger(arr[i])) {
            a += arr[i]
            // console.log("ok")
        }

    }
    return a;
}