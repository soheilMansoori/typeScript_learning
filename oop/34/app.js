"use strict";
var Saipa;
(function (Saipa) {
    Saipa.name = "saipa";
    class Car {
        constructor(name, color, brand) {
            this.name = name;
            this.color = color;
            this.brand = brand;
            this.name = name;
            this.color = color;
            this.brand = brand;
        }
        make() {
            console.log(`${this.name} make and ready to run`);
        }
    }
    Saipa.Car = Car;
})(Saipa || (Saipa = {}));
const myCar = new Saipa.Car("pride", "white", "saipa");
console.log("myCar is => ", myCar);
