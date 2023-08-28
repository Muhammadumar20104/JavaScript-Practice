var arr = [2, 7, 9, 1, 6, 1, 6, 3]
console.log(spcial(arr))
function spcial(arr) {
    for (let i = 0; i < arr.length; i++ ) {
        if(arr[i]%2==0 && arr[i+1]%2!=0){
            i =i+2
            return true
        }
        else{
            return false
        }
    }
}