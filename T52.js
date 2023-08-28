var str = "Nemo is me";
console.log(Nemo(str.split(' ')))
function Nemo(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] == 'Nemo') {
            console.log(i + 1)
            return true
        }
    }
    return 0;
}