/*
  This function is always executed when the class is created, not when we create an object from this class
  class Decorator always run when class created not created instance

*/
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// class Decorator
function BaseEntity(constructor) {
    // original Constructor
    console.log("constructor => ", constructor);
    // its like static method
    constructor.prototype.created = new Date();
    console.log("constructor.prototype => ", constructor.prototype);
}
let Person = class Person {
    // constructor function
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    // get info
    get info() {
        return `${this.firstName}: ${this.lastName}`;
    }
};
Person.staticProperty = "static";
Person = __decorate([
    BaseEntity
], Person);
const soheilPerson = new Person("soheil", "mansoori");
console.log("Person class prototypes =>", Person.prototype);
console.log("Person class static property =>", Person.staticProperty);
console.log("soheil person info =>", soheilPerson.info);
