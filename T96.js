function Duplicate(arr) {
    var arr2 = [];
    var arr3 = [];

    for (let i = 0; i < arr.length; i++) {
        if (!arr2.includes(arr[i])) {
            arr2.push(arr[i]);
        }
        else{
            arr3.push(arr[i])
        }
    }
    return arr3;
}
var arr = [5, 'the', 7, 3, 5, 10];
console.log(Duplicate(arr)); 
!function(){
    console.log("ok")
}()