"use strict";
class Teachers {
    // default public
    constructor(name, age, email) {
        this.name = name;
        this.age = age;
        this.email = email;
        this.name = name;
        this.age = age;
        this.email = email;
    }
}
class Students extends Teachers {
    constructor(name, age, email, lessons) {
        super(name, age, email);
        this.lessons = lessons;
        this.lessons = lessons;
    }
}
const soheilStudent = new Students("soheil", 21, "soheil@example.com", [
    "ts",
    "tailwind",
]);
