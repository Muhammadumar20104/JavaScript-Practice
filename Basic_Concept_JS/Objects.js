// singleton 
// jab Object.create() isi ko bola jata hai constructor method through or isi ke andar singleton ban ta hai 

// object literals

const JsUser = { "name": "Umar", age: 23, location: "SDK", email: "raoumar201031", islogin: false }
// console.log(JsUser)
// console.log(JsUser["name"])
// console.log(JsUser);
// hum symbol ko kese use kre or define kese kre 
const Sym=Symbol("U1")
const JsUser1 = { name: "Umar", age: 23, location: "SDK", email: "raoumar201031", islogin: false,[Sym]:"Umar" }
console.log(typeof JsUser1[Sym])
console.log(JsUser1.name="M.umar");
// Object.freeze(JsUser1)
// JsUser1.name="M.siddique"
// console.log(JsUser1.name="M.siddique");
// console.log(JsUser1);
JsUser1.Fun1=function () {
    console.log("IM A Function");
}

JsUser1.Fun2=function () {
    console.log(`IM A Function ,${this.location+this.email}`);
}
console.log(JsUser1.Fun2())