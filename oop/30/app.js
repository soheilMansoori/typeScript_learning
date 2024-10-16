"use strict";
function add(param1, param2) {
    if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    else if (typeof param1 === "string" && typeof param2 === "string") {
        return param1.toString() + param2.toString();
    }
}
const result = add("MMD", "Amin");
console.log(result.split(""));
