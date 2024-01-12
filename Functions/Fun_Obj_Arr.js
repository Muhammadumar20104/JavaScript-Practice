
function Cart(...num) {
    let sum =0
    let data = num.map((e) => {
        sum += e
        return sum
    })
    return data
}
console.log(Cart(2, 4, 6, 8));