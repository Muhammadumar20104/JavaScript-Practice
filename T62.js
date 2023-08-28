var obj1 = { name: "umar" }
var obj2 = { name1: "rao" }
console.log(isObj(obj1, obj2))
function isObj(obj1, obj2) {
    if (typeof obj1 == "object" && typeof obj2 == "object") {
        console.log("Parameter one is Object")
    }
    else {
        console.log("Object ni hai")
    }
}