/*
  This function is always executed when the class is created, not when we create an object from this class
  class Decorator always run when class created not created instance

*/

// class Decorator
function BaseEntity(constructor: any): void {
  // original Constructor
  console.log("constructor => ", constructor);
  // its like static method
  constructor.prototype.created = new Date();
  console.log("constructor.prototype => ", constructor.prototype);
}

@BaseEntity
class Person {
  static readonly staticProperty: string = "static";

  // constructor function
  constructor(private firstName: string, private lastName: string) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // get info
  get info() {
    return `${this.firstName}: ${this.lastName}`;
  }
}

const soheilPerson = new Person("soheil", "mansoori");
console.log("Person class prototypes =>", Person.prototype);
console.log("Person class static property =>", Person.staticProperty);
console.log("soheil person info =>", soheilPerson.info);
