var stolenItems = {
    tv: 30,
    skate: 20,
    stereo: 50,
}
// console.log(stolenItems==null)
console.log(stolen(stolenItems))
function stolen(stolenItems) {
    var a = 0;
    if (Object.keys(stolenItems) != 0) {
        for (var key in stolenItems) {
            a += stolenItems[key]

        }
        console.log(a)
    }
    else {
        console.log("Lucky You")
    }
    // return a

}