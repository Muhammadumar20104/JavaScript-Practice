// for in loop 
const obj = { name: "umr", roll: 201031 }
const arr = [{ name: "umar", roll: 201031 },{ name: "rao", roll: 20104 }]
for (const key in arr) {
    // console.log(arr[key]);
    
}

const new1=arr.forEach((v,i,arr)=>{
    console.log(v.roll);

})
// console.log(new1);