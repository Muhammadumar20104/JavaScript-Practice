var w = 1
var space = "Neptune"
console.log(Planet(w, space))
function Planet(w, space) {
    var M_on_E;
    if (space === "Mars") {
        w = w / 9.8
        M_on_E = w * 3.71
    }
    else if (space === "Jupiter") {
        w = w / 9.8
        // console.log(w)
        M_on_E = w * 24.79
    }
    else if(space==="Neptune"){
        w=w/9.8
        M_on_E=w*11.15
    }

    return M_on_E

}