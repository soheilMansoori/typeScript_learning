"use strict";
let Peugeot206;
Peugeot206 = {
    compony: "peugeot",
    color: "white",
    year: 95,
    model: "206",
    passengers: 4,
    drive(speed) {
        console.log(`${this.model} Drive ${speed} KM/H`);
    },
    stop() {
        console.log(`${this.model} Stop Drive`);
    },
};
