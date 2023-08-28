var drink=[
    { name: 'Water', price: 3 },
    { name: 'Soda', price: 6 },
    { name: 'Tea', price: 2 },
    { name: 'Coffee', price: 1 }
  ]
console.log(sort(drink))
function sort (drink) {

    drink.sort((a,b)=>a.price-b.price)
    // for (let i = 0; i < drink.length; i++) {
    //     for (let j = 1; j < drink.length; j++) {
    //         drink=drink[i]-drink[j]
    //     }
    // }
    // // return drink
    console.log(drink)
    
}