class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;

    }
    compareAge(p2) {
        if (p2.age > this.age) {
            console.log(`${p2.name} is older than me `)
        }
        else if (p2.age < this.age) {
            console.log(`${p2.name} younger than me`)
        }
        else {
            console.log("same")
        }
    }
}
p1 = new Person("Samuel", 24)
p2 = new Person("Joel", 36)
p3 = new Person("Lily", 24)
console.log(p2.compareAge(p3))