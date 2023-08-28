var product = [
	{ product: "Milk", quantity: 3, price: 1.50 }
]
console.log(name(product))
function name(product) {
    var Total = 0;

    for (let i = 0; i < product.length; i++) {
        Total += product[i].quantity * product[i].price
    }
    return Total

}