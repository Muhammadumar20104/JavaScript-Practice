var a=99;
console.log(name1(a))
function name1(a) {
    var b=parseInt( a.toString().split('').reverse().join('') )
    if(a>b){
        return true
    }
    else if (b>a){
        return false
    }
    else{
        
        console.log("neither and nor")
        return true
    }
    
}