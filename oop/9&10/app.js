"use strict";
class Users {
    constructor(name, age, password) {
        this.name = name;
        this.age = age;
        this.password = password;
        this.name = name;
        this.age = age;
        this.password = password;
    }
    // getter most return something
    get getName() {
        return this.name;
    }
    // setter most have arguments
    set setNewName(newName) {
        this.name = newName;
    }
}
const soheilUser = new Users("soheil", 21, "soheil1382");
// console.log(soheilUser.name); // error because private
console.log(soheilUser.getName); // ok because getter
console.log(soheilUser);
soheilUser.setNewName = "new soheil name"; // ok set new name
console.log(soheilUser);
