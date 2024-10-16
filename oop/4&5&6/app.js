"use strict";
class Users {
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
    }
    setAge(newAge) {
        this.age = newAge; // ok its private you can change in father class
    }
    setName(newName) {
        this.name = newName; // ok its protected you can change in father class
    }
}
class Students extends Users {
    constructor(name, age, email, lessons) {
        super(name, age, email);
        this.lessons = lessons;
        // this.age = 12 // error its private you cant change in child class
        this.name = "soheil-mansoori"; // ok its protected you can change in child class
    }
    setLessons(newLessons) {
        // this.lessons = newLessons; // error its readonly you cant change it just you can write it
        console.log(this.lessons); // ok its readonly you just write it
    }
}
const soheilStudent = new Students("soheil", 21, "soheil@eamil.com", [
    "ts",
    "tailwind",
]);
// soheilPerson.age = 12; // error
console.log(soheilStudent);
