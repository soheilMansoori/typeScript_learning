"use strict";
class PeugeotTU5 {
    constructor(compony, color, year, model) {
        this.compony = compony;
        this.color = color;
        this.year = year;
        this.model = model;
        this.compony = compony;
        this.color = color;
        this.year = year;
        this.model = model;
    }
    drive(speed) {
        console.log(`${this.model} Drive ${speed} KM/H`);
    }
    stop() {
        console.log(`${this.model} Stop Drive`);
    }
}
const TU5 = new PeugeotTU5("peugeot", "white", 1402, "TU5");
