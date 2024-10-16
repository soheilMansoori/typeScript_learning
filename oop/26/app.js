"use strict";
// * 2
const add = (param1, param2) => {
    if (typeof param1 === "string" && typeof param2 === "string") {
        return param1.toString() + param2.toString();
    }
    else if (typeof param1 === "number" && typeof param2 === "number") {
        return param1 + param2;
    }
    return 0;
};
