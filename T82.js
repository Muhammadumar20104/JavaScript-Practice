var str = "Hello World 2"
console.log(name(str))
function name(str) {
    let alpha = ""
    let digit = ""
    // let sp=str.split(' ').join('')
    for (const key of str) {
        if(isNaN(key)){
            alpha +=key
        }
        else{
            digit +=key
        }


    }
    return {alpha,digit}

}
