var arr=["abc", 'abc', "abc", "abc"]
console.log(Identity(arr))
function Identity (arr) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] !==arr[0]){
            return false
        } 
    }
    return true
}