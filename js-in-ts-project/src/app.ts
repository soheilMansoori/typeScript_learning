// import { pow } from "./func.js"; // error

// first go to tsconfig fix that allowJs:true
import { pow } from "./func.js"; // ok
import { sum } from "./utility.js";

console.log(pow(6)); // ok 36
console.log(pow("6")); // error 36

// second go to tsconfig fix that checkJs: true

console.log(pow(3)); // ok 36
console.log(pow("6")); // now error in func.js go to func.js after fix fun.js throw error here

console.log(sum(5, 6)); // ok
console.log(sum("5", 6)); // error

// i first use script tag in index.html and create code.js and use that now log userName variable but ts error
console.log(userName); // error

// way to fix that bug create Declaration Files with name code.d.ts and there create type for userName after that bug fix and ts happy
console.log(userName); // now ok
