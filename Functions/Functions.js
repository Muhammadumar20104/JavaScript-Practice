// Functions 
const store = function Sum(n1, n2) {
    if (!n1 || !n2) {
        if (!n1) {
            console.log("please Enter The Number of N1");
        }
        else {
            return console.log("please Enter The Number of N2");
        }
    }
    return n1 + n2

}
console.log(store(26))