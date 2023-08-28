var stolenItem={ piano: 300, tv: 100, skate: 50 }
var name="skate"
console.log(Stolen(stolenItem,name))
function Stolen (stolenItem,name) {
    var obj={}
    for (var key in stolenItem) {
        if(key==name){

        }
        else{
            // obj={[key]:stolenItem[key]}
            obj[key]=stolenItem[key]
        }

    }
    return obj
    
}