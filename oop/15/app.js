"use strict";
const user = {
    name: "soheil",
};
const isUserLogin = (userData) => {
    if (userData.name == "soheil") {
        return true;
    }
    else {
        return false;
    }
};
console.log(isUserLogin({ name: "soheil", age: 21, login: () => false }));
