 var a=99;
 console.log(functionName(a))
 function functionName (a) {
    var b;
    for (let i = 0; i <=a; i++) {
        b=a*6-i
     }
     if(b==0){
        b -=1
     }
     return b+1
 }
 