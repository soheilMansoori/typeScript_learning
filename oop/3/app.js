"use strict";
class Users {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
}
class Students extends Users {
    constructor(name, age, email, lessons) {
        super(name, age, email);
        this.lessons = lessons;
    }
}
const soheilStudent = new Students("soheil", 21, "soheil@eamil.com", [
    "ts",
    "tailwind",
]);
console.log(soheilStudent);
