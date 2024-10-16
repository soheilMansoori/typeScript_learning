"use strict";
let car = "pride";
// let car = "206"; // error
var IranKhodro;
(function (IranKhodro) {
    IranKhodro.car = "Pars";
    class Body {
        constructor(name, color) {
            this.name = name;
            this.color = color;
            this.name = name;
            this.color = color;
        }
        make() {
            console.log(`${this.name} Created Successfully`);
        }
    }
    IranKhodro.Body = Body;
})(IranKhodro || (IranKhodro = {}));
var Saipa;
(function (Saipa) {
    Saipa.car = "pride";
})(Saipa || (Saipa = {}));
console.log(IranKhodro.car);
console.log(Saipa.car);
let Pars = new IranKhodro.Body("TU5", "red");
Pars.make();
