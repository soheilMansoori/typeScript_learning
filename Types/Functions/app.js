"use strict";
function login(name, password, age, phone) {
    if (name && password && age && phone) {
        return true;
    }
    else {
        return false;
    }
}
console.log(login("soheil", 1382, 20, 9109336202));
function returnFunc(test1, test2) {
    return false;
}
console.log(returnFunc("test1", "test2"));
