var arr=["a", "b", "c"]
console.log(Lower(arr))
function Lower (arr) {
    var obj={}
    for (let i = 0; i < arr.length; i++) {
        var key=arr[i]
        var value=arr[i].toUpperCase();
        obj[key]=value
        
    }
    return obj
}