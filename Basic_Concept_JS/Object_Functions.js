// singleTon  object ye hota hai jse Me kaho ka const singlton =new Object() is new Object ko singlton kaha jata hai 

const singlton =new Object()
console.log(singlton);
// or is ko singleton ni kaha jata jese me cosnt nonsiglton={}

const nonsiglton={}
console.log(nonsiglton)

const NestedObj={
    email:"m.umar201031",
    username:{
        first:{name:"Umar"},
        second:{lastName:"Siddique"}

    }
}
console.log(NestedObj.username)
const obj1={1:"1",2:"2"}
const obj2={3:"3",4:"4",obj1}
// const obj3={...obj1,...obj2}
const obj3=Object.assign({},obj1,obj2)

console.log(obj3);
console.log(obj);