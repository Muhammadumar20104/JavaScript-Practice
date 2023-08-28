var a=200,b=200;
console.log(mystry(a,b))
function mystry (a,b) {
    var c=a*b;
    var len=c.toString().length
    var f=c.toString().charAt(0)

    // console.log(len)
    if(len==1 || len==2){
        // console.log(c)
        return c
    }
    else {
        // console.log("fail")
        return f
    }
    
}