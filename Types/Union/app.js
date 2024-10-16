"use strict";
// Union type
let test = 20;
// test = '' // error
let test2 = 20;
test2 = ""; // ok
// test2 = false // error
function sum(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    else if (typeof param1 === "string" && typeof param2 === "string") {
        return param1.toString() + param2.toString();
    }
}
console.log(sum(12, 8));
console.log(sum("Es", "6"));
const users = [false, 21, "soheil"];
