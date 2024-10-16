"use strict";
// Literal Type
let age = 20;
age = 21; // not error
let userAge = 18;
// userAge = 20 // error
const userName = "test";
// userName = '' // error
let adminAge = 18;
adminAge = 19;
adminAge = 20;
// adminAge = 21 // error
function setCssProprty(param) {
    // h1Element.style.width = `12${param}`
    return `12${param}`;
}
setCssProprty("em"); // ok
// setCssProprty('%') // erro
// setCssProprty(12) // erro
// Template Literal Type
let num1 = 12;
let num2 = 8;
let sum = `Sum : ${num1 + num2}`;
function setCssProprty(param) {
    return param;
}
console.log(setCssProprty("12em"));
console.log(setCssProprty("15rem"));
// setCssProprty('15%') // error
