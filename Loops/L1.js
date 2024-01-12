// for of 
const arr = [1, 2, 4, "u", "m", "a", "r"]
for (const value of arr) {
    // console.log(value);

}

const greet = [{ name: "umar" }, { name: "rao" }]
for (const value of greet) {
    // console.log(value.name);
}

// Maps 
const map = new Map()
map.set("name", "umar")
map.set("roll", 20103)
// console.log(map.get('name'));
// console.log(map.size);
map.set("name", "umar")
console.log(map);
for (const [i, j] of map) {
    // console.log(`key =${i} values =${j}`);
}
// for of loop obj ko iterate ni kr ti 
const obj = { name: "umr", roll: 201031 }
for (const i of obj) {
    // console.log(i);
}