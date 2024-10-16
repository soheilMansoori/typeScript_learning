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
}
class Students extends Users {
    constructor(name, password, age, lessons) {
        super(name, password, age);
        this.lessons = lessons;
        this.lessons = lessons;
        Students.count++;
    }
    static getCount() {
        return Students.count;
    }
}
Students.count = 0;
const soheilStudent = new Students("soheil", "soheil1382", 21, [
    "ts",
    "tailwind",
]);
// console.log(soheilStudent.getCount); // error
console.log(Students.getCount);
