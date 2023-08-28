var arr=[35, 4, 9, 37]
console.log(name(arr))
function name(arr) {
    var SP=false
    arr.forEach(e => {
        var b=e.toString()
        console.log(b)
        if(b.includes("7")){
            SP=true
        }
    });
    if(SP){
        return "BOOM"
    }
    else{
        return "there is no 7 in the array"
    }
}