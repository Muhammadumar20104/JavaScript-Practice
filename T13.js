var arr = [1, 2, 3, 4, 5]
// console.log(functionName(arr))
var min = arr[0];
var max = arr[0];

console.log(functionName(arr))
function functionName(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i]<min){
            min=arr[i]
        }
        else if (arr[i]>max){
            max=arr[i]
        }
        
    }
    return [min ,max]
}