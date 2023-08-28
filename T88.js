var arr = [1, 1, 1, 1, -3, -4]
console.log(name(arr))
function name(arr) {
    var Pos = 0;
    var Neg = 0;
    var store
    var Nv
    for (let i = 0; i < arr.length; i++) {
        // console.log(store)
        if (arr[i] >= 0 && arr[i] != store) {
            store = arr[i]
            Pos++

        }
        else if (arr[i] < 0 && arr[i] != Nv) {
            Nv = arr[i]
            Neg++
        }


    }
    if (Pos > Neg) {
        return true
    }
    else {
        return false
    }

}