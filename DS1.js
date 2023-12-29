// var rr=['1','2','3']
// var [x,,z]=rr
// console.log(x,z)
var obj = {
    b: "Borjan",
    m: "Gig",
    t: "shoe",
    y: 2023,
    c: 'black',
    ris: {
        city: "SDK",
        country: "Pakistan"
    }
}
Shoes(obj)
function Shoes({ y ,ris:{city,country}}) {
    console.log("I want to buy a shoes are in year " + y + "city in "+city+"and the Country are "+country)
}