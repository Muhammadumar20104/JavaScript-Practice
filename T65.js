var shopping = { "Flatscreen TV": 39.99 }
console.log(Shipping(shopping))
function Shipping(shopping) {
    var total = 0;
    for (var key in shopping) {
        total += shopping[key]
    }
    if (total > 50.00) {
        return true;
    }
    else {
        return false;
    }
}