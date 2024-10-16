// Literal Type
let age: number = 20;
age = 21; // not error

let userAge: 18 = 18;
// userAge = 20 // error

const userName: string = "test";
// userName = '' // error

let adminAge: 20 | 19 | 18 = 18;
adminAge = 19;
adminAge = 20;
// adminAge = 21 // error

function setCssProperty(param: "em" | "px" | "rem") {
  // h1Element.style.width = `12${param}`
  return `12${param}`;
}

setCssProperty("em"); // ok
// setCssProperty('%') // error
// setCssProperty(12) // error

// Template Literal Type
let num1: number = 12;
let num2: number = 8;
let sum: string = `Sum : ${num1 + num2}`;

function setCssPaddingProperty(
  param: `${number}px` | `${number}em` | `${number}rem`
): string {
  return param;
}

console.log(setCssPaddingProperty("12em"));
console.log(setCssPaddingProperty("15rem"));
// setCssPaddingProperty('15%') // error
