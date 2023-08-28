var arr=[4, 4, 4, 8, 4, 8, 4]
console.log(name(arr))
function name(arr) {
    var b=0;
    for (let i = 0; i < arr.length; i++) {
        console.log([arr[i],arr[i+1],arr[i+2]])
        if(arr[i]===arr[i+2] && arr[i] !== arr[i+1]){
            b +=1
        }
    }
    return b
}
