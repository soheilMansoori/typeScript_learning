"use strict";
// * 3
class Car {
    constructor(name, color, model) {
        this.name = name;
        this.color = color;
        this.model = model;
        this.name = name;
        this.color = color;
        this.model = model;
    }
    drive(speed) {
        console.log(`${this.name} drive ${speed}(Km/h)`);
    }
}
class Truck extends Car {
    constructor(name, color, model) {
        super(name, color, model);
        this.name = name;
        this.color = color;
        this.model = model;
    }
    load(weight) {
        console.log(`set ${weight}(Kg) load on ${this.name}`);
    }
}
const useCar = (car) => {
    if (car instanceof Car) {
        // car.drive(100);
    }
    else if (car instanceof Truck) {
        // car.load(200);
    }
};
const pride = new Car("Pride", "Black", 1403);
const FH = new Truck("FH", "White", 2022);
// useCar(FH);
useCar(pride);
