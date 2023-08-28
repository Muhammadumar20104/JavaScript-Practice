var a=-1;
var b="m"

console.log(generation(a,b))
function generation(x, y) {
    if (x == -3) {
        if (y === "m") {
            return "great grandfather";
        }
        else {
            return "great grandmother";
        }
    }
    else if (x == -2) {
        if (y === "m") {
            return "grandfather";
        }
        else {
            return "grandmother";
        }
    }
    else if (x == -1) {
        if (y === "m") {
            return "father";
        }
        else {
            return "mother"
        }
    }
    else if (x == 0) {
        if (y === "m") {
            return "me!";
        }
        else {
            return "me!";
        }
    }
    else if (x == 1) {
        if (y === "m") {
            return "son";
        }
        else {
            return "daughter "
        }
    }
    else if (x == 2) {
        if (y === "m") {
            return "grandson";
        }
        else {
            return "granddaughter "
        }
    }
    else if (x == 3) {
        if (y === "m") {
            return "great grandson";
        }
        else {
            return "great granddaughter "
        }
    }
}