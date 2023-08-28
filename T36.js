class Circle {
    constructor(r) {
        this.r = r
    }
    getArea() {
        return 3.14 * this.r ** 2;

    }
    getPerimeter() {
        return 2 * 3.14 * this.r;

    }
}
let circle = new Circle(4.44)
console.log(circle.getPerimeter())