// import { pow } from "./func.js"; // error
// first go to tsconfig fix that allowJs:true
import { pow } from "./func.js"; // ok
console.log(pow(6)); // ok 36
console.log(pow("6")); // error 36
// second go to tsconfig fix that checkJs: true
console.log(pow(3)); // ok 36
console.log(pow("6")); // now error in func.js go to func.js after fix fun.js throw error here
