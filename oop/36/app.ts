// * 1
// function echo<T>(param: T): T {
//   console.log(param.length); // error but ts dont know what type of T
//   return param;
// }

// const newResult_1 = echo<string>("js");
// console.log(result_1.length);

function echo<T extends string>(param: T): T {
  console.log(param.length); // now T is string and ok
  return param;
}

const newResult_1 = echo<string>("js");
console.log(newResult_1.length);

//  * 2
// const merge = <T, U>(obj1: T, obj2: U): T & U => {
//   return Object.assign(obj1, obj2);
// };
// let mergedObjects = merge({ name: "soheil", family: "mansoori" }, 12); // not error but its bug

const merge = <T extends object, U extends object>(obj1: T, obj2: U): T & U => {
  return Object.assign(obj1, obj2);
};
// let mergedObjects = merge({ name: "soheil", family: "mansoori" }, 12); // now error but its bug
// let mergedObjects = merge({ name: "soheil", family: "mansoori" }, {test : "test"}); // now error but its bug

// * 3
function echoTest<T>(param: T[]): T {
  console.log(param.length); // now is ok
  return param[0];
}

// * 4

interface User {
  name: string;
}

function newUser<T extends User>(param: T): T {
  console.log(param.name); // ok
  return param;
}

// newUser(12); // error
newUser({ name: "soheil" }); // ok
