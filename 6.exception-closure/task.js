function parseCount(value) {
    let result = Number.parseFloat(value);

    if (Number.isNaN(result)) {
        throw new Error("Невалидное значение");
    }
    return result
}

function validateCount(value) {
    try {
        let result= parseCount(value);
        return result;
    } catch (error) {
        return error
    }
}

class Triangle {
    constructor(a, b, c) {
        if (
            a + b <= c ||
            b + c <= a ||
            c + a <= b
        ){
            throw new Error("Треугольник с такими сторонами не существует")
        }
        this.a = a;
        this.b = b;
        this.c = c;

    }
    get perimeter() {
        return this.a + this.b + this.c;
    }
    get area()  {
        let p = this.perimeter / 2;
        let area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
        return Math.round(area * 1000) / 1000
    }
}

function getTriangle(a, b, c) {
    try {
        let triangle = new Triangle(a, b, c);
        return triangle
    } catch (error) {
        return {
            get area() {
                return "Ошибка! Треугольник не существует"
            },
            get perimeter(){
                return "Ошибка! Треугольник не существует"
            }
        }
    }
}