var Items = {
    piano: 2000,
}
console.log(name(Items))
function name(Items) {
    var max = "";
    for (const key in Items) {
        // console.log(key)
        if (Items[key] > max) {
            max = Items[key]
        }
    }
    for (const key2 in Items) {
        if (Items[key2] == max) {
            return key2
        }
    }
}


