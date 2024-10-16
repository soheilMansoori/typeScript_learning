// function describe(param: string) {
//   let txt = "zero (0) items";
//   if (param.length) {
//     txt = `${param.length} items`;
//   }
//   return [txt, param.length];
// }

// let result = describe("typeScript"); // ok
// let result2 = describe([1, 2, 3]); // error

// now best way with generic type
interface Type {
  length: number;
}

function describe<T extends Type>(param: T): [string, T] {
  let txt = "zero (0) items";
  if (param.length) {
    txt = `${param.length} items`;
  }
  return [txt, param];
}

let result = describe("typeScript"); // ok
let result2 = describe([1, 2, 3]); // now its ok
// let result3 = describe({ name: "soheil" }); // error
// let result3 = describe(12); // error
