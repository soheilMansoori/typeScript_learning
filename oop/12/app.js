"use strict";
class Users {
    constructor(name, password, age) {
        this.name = name;
        this.password = password;
        this.age = age;
        this.name = name;
        this.password = password;
        this.age = age;
    }
    // info
    info() {
        console.log(`name is => ${this.name} , password is => ${this.password} , age is => ${this.age}`);
    }
}
class Students extends Users {
    constructor(name, password, age, lessons) {
        super(name, password, age);
        this.lessons = lessons;
        this.lessons = lessons;
    }
    // info Overwrite here
    info() {
        console.log(`name is => ${this.name} , password is => ${this.password} , age is => ${this.age} , lessons is => ${this.lessons}`);
    }
}
const soheilStudent = new Students("soheil", "soheil1382", 21, [
    "ts",
    "tailwind",
]);
soheilStudent.info();
