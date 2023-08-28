
var name = "MUBASHIR";
console.log(Am(name))
function Am(name) {
    var scores = {
        "A": 100, "B": 14, "C": 9, "D": 28, "E": 145, "F": 12, "G": 3,
        "H": 10, "I": 200, "J": 100, "K": 114, "L": 100, "M": 25,
        "N": 450, "O": 80, "P": 2, "Q": 12, "R": 400, "S": 113,
        "T": 405, "U": 11, "V": 10, "W": 10, "X": 3, "Y": 210, "Z": 23
    }
    var score = 0;
    for (let i = 0; i < name.length; i++) {
        for (const key in scores) {
            if (key == name[i]) {
                score += scores[key]
            }
        }
    }
    if (score <= 60) {
        console.log("NOT TOO GOOD")
    }
    else if (61 <= score && score <= 300) {
        console.log("PRETTY GOOD")
    }
    else if (301 <= score && score <= 599) {
        console.log("VERY GOOD")
    }
    else {
        console.log("THE BEST")
    }

    return score
}