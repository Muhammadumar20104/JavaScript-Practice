var arr = [1, 2, 5, 6, 7, 2, 3, 5]
function Duplicate(arr) {
    var arr2 = [];
    var arr3 = [];
    for (let i = 0; i < arr.length; i++) {
        arr2.push(arr[i])
    }
    for (let j = 0; j < arr2.length; j++) {
        if (arr=== arr2[j]) {
            arr3.push(arr[i])
        }
    }

    return arr3
}
console.log(Duplicate(arr))