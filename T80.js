var order = { "Deluxe Burger": 35, "Icecream Shake": 4, "Fries": 5 }
var cost = 40
console.log(name(order, cost))
function name(order, cost) {
    var GO = {}
    for (const key in order) {
        if (order[key] > cost) {
            GO[key] = order[key]
        }
    }
    return GO;

}