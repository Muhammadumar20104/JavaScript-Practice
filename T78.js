var getXP = {
    "Very Easy": 11,
    "Easy": 0,
    "Medium": 2,
    "Hard": 0,
    "Very Hard": 27
}
console.log(name(getXP))
function name(getXP) {
    var total = 0
    for (const key in getXP) {
        if (key == "Very Easy") {
            total += getXP[key] * 5
        }
        else if (key == "Easy") {
            total += getXP[key] * 10
        }
        else if (key == "Medium") {
            total += getXP[key] * 20
        }
        else if (key == "Hard") {
            total += getXP[key] * 40
        }
        else if (key == "Very Hard") {
            total += getXP[key] * 80
        }

    }
    return total.toString().concat("XP")

}
