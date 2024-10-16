// !!!!!! dry !!!!!!!
function echoStr(param: string): string {
  return param;
}
function echoNum(param: number): number {
  return param;
}
function echoAny(param: any): any {
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
function echo<T>(param: T): T {
  return param;
}

const newResult_1 = echo<string>("js");
console.log(result_1.length);

const newResult_2 = echo<number>(3);
console.log(result_2 ** 2);

// * 2
// not work
// const merge = (obj1: object, obj2: object): object => {
//   return { ...obj1, ...obj2 };
// };
// let mergedObjects = merge({ name: "soheil" }, { age: 21 });
// console.log(mergedObjects.); // not work

const merge = <T, U>(obj1: T, obj2: U): T & U => {
  return { ...obj1, ...obj2 };
};
let mergedObjects = merge({ name: "soheil", family: "mansoori" }, { age: 21 });
console.log(mergedObjects.age);
