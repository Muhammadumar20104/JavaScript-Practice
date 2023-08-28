var arr = []
console.log(JAZZ(arr))
function JAZZ(arr) {
    var c = [];
    if (arr.length > 0) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].split('').includes('7')) {
                return false
            }
            else {
                c.push(arr[i] + '7')
            }
        }
    }
    return c;
}