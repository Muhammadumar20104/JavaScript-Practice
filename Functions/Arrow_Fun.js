// this ko hum humesha context ke leye istamal kr te hai object ke ander hi hum osi object ki cheez ko acess kr na  agar hume kisi cheez ko use kr na ho to hum this ka istamal 
// kr te hai

const Obj = {
    user: "Umar",
    fun: function () {
        console.log(`My Name is ${this.user}`);
        // console.log(this);
        // return 0
    }
}

function dost() {
    console.log(this);

}
dost()
// or Explicist me Hum Retrun use kr te hai jese const arrow = (n1, n2) => {
//     return n1 + n2;
// } is ko Explicist kah te hai

// Impilcist me Hum Arrow function me return use ni kr te hai jese const arrow=(n1,n2)=> (n1+n1) is Impilcist kah te hai

// console.log(Obj.fun());
// Obj.user="Maria"
// console.log(Obj.fun());
// console.log(this);