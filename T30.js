var data = [
    { name: "John", age: 21, budget: 29000 },
    { name: "Steve", age: 32, budget: 32000 },
    { name: "Martin", age: 16, budget: 1600 }
]
console.log(Data(data))
function Data(data) {
    var sum = 0;
    data.map((item) => sum += item.budget)
    return sum
}