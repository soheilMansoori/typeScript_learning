"use strict";
class Person {
    constructor(name, email, age) {
        this.name = name;
        this.email = email;
        this.age = age;
    }
}
const soheilPerson = new Person("soheil", "soheol@gmail.com", 21);
console.log(soheilPerson);
// const ahadPerson: Person = ""; // error
const ahadPerson = { name: "ahad", email: "ahad@gmail.com", age: 56 };
const aliPerson = soheilPerson;
// const persons: Person[] = [{}]; // error
const persons = [
    soheilPerson,
    ahadPerson,
    { name: "masom", email: "masom@gmail.com", age: 45 },
];
