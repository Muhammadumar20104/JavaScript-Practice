var obj1 = { x: -2, y: 1 }
var obj2 = { x: 4, y: 3 }
console.log(Distance(obj1, obj2))
function Distance(obj1, obj2) {
    var X = obj1.x - obj2.x;
    var Y = obj1.y - obj2.y;
    var total = Math.sqrt(X ** 2 + Y ** 2)
    return total;
}