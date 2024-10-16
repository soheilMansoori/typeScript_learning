const array: [number, string] = [1, "ADMIN"];
const test: (string | boolean | number)[] = [false, 20, "s"];

// array.push(false) // error
// array.push('false') // ok !!!!
// array[2] = 5 // error
// array[0] = 2 // ok !!!
// array[1] = "USER"; // ok !!!

const myArray: [number, string][] = [
  [1, "ADMIN"],
  [2, "USER"],
];

let Test: { id: number; name: string }[] = [{ id: 1, name: "soheil" }];
