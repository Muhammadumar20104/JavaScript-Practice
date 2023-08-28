var obj = { whiskey: 100, "Rammstein A": 100, "Rammstein B": 50 }
console.log(name(obj,"Rammstein A"))
function name(obj,vl) {
    for (const key in obj) {
        console.log(key)
        if(key==vl){
            return obj[key]
        }

    }
}