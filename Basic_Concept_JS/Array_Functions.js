const marvel_heroes=["thor","ironman","spiderman"]
const dc_heroes=["superman","flash","batman"]
// marvel_heroes.push(9)
// const newrarr=marvel_heroes.concat(dc_heroes)
// const newrarr=[...marvel_heroes,...dc_heroes]
// console.log(newrarr);

const Nested=[1,2,3,4,[5,6,7],8,[9,[10]]]
const real_Nested=Nested.flat(Infinity)
console.log(real_Nested);

console.log(Array.isArray("Umar"));
console.log(Array.from("Umar"));
console.log(Array.isArray({name:"Umar"}));

let S1=100
let S2=200
let S3=300

console.log(Array.of(S1,S2,S3));