// primitive DataTypes   Call By Value

/*primitive datatypes hai jit bhi hai ye sare call by value hote hai matlab jab bhi hum 
in ko kahi na kahi  copy kr te hai to in ka orignal data ni deya jata
in ka orignal data ya orignal refrence ni deya jata balke in ko copy kr ke deya jata hai or jo bhi changes kr te hai wo 
copy me changes hote hai 
    */
// 7 categories :String ,Number , Boolean ,null,undefine ,symbol,BigInt

// Reference Type (Non Primitive) bhi bol te hai 
// is ki sari value wo hai jo directly in ka reference alocate kiya jata hai 

// Array, Objects,Functions ye sare Non Primintive ya phir Reference type ho te hai 

// const arr=[1,2,3,4,5]
// console.log(typeof arr);



// +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
// Humare Pass 2 types ki memory hoti hai
// 1 Stack memory jise hum (primitive) kah te hai 
// 2 Heap Memory jise hum (Non primitive) kah te hai 

// Stack 

// let Name="Umar"
// let otherName=Name
// otherName="M.umar"
// console.log(Name);
// console.log(otherName);

// Heap 
let obj={name:"Umar"}
let obj1=obj
obj1.name="M.umar"
console.log(obj);
console.log(obj1);
