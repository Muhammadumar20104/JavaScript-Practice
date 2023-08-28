var obj = { tv: 30,
    timmy: 20,
    stereo: 50,}
console.log(Rambo(obj))
function Rambo(obj) {
    var find = "timmy"
    for (var key in obj) {
        if (key == find) {
            var f = key.charAt(0).toUpperCase() + key.slice(1);
            console.log(f)
            return `${f} is in the Object list`
        }
        else if (!obj.hasOwnProperty(find)) {
            var f = find.charAt(0).toUpperCase() + find.slice(1);
            return `${f} is here `

        }
        else if (Object.keys(obj).length === 0) {
            var f = find.charAt(0).toUpperCase() + find.slice(1);
            return `${f} is here because object is here`;
        }
    }

}