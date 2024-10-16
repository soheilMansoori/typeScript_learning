"use strict";
// !!!!!! dry !!!!!!!
function echoStr(param) {
    return param;
}
function echoNum(param) {
    return param;
}
function echoAny(param) {
    return param;
}
// !!!!!! dry !!!!!!!
const result_1 = echoStr("js");
console.log(result_1.length);
const result_2 = echoNum(3);
console.log(result_2 ** 2);
const result_3 = echoAny("js");
// Generic Type
// * 1
function echo(param) {
    return param;
}
const newResult_1 = echo("js");
console.log(result_1.length);
const newResult_2 = echo(3);
console.log(result_2 ** 2);
// * 2
// dont work
// const merge = (obj1: object, obj2: object): object => {
//   return { ...obj1, ...obj2 };
// };
// let mergedObjects = merge({ name: "soheil" }, { age: 21 });
// console.log(mergedObjects.); // not work
const merge = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
};
let mergedObjects = merge({ name: "soheil", family: "mansoori" }, { age: 21 });
console.log(mergedObjects.age);
