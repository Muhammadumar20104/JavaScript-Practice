

let fetchdata=new Promise((resolve, reject) => {
    setTimeout(() => {
         resolve("Task Sucess")
    }, 1000)
})
fetchdata.then((result)=>{console.log(result)}).catch((console.error()))