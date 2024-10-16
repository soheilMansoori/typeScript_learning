// Const Assertion (const cast)

const test1: number = 12;

// test1 = 13 // error

let test2 = 12 as const; // way 1
let test3 = <const>12; // way 2

// test2 = 13 // error

const array = [12, 13] as const;

// array.push(20) // error

let arr = [12, 13] as const;

// arr = [14,15] // error

let number = [12, 8] as const;

let user = {
  id: 1,
  name: "soheil",
} as const;

function sum(num1: number, num2: number): number {
  return num1 + num2;
}

console.log(sum(...number));

let languages = ["js", "py"];

let users = [{ id: 1, name: "soheil", languages }] as const;

console.log(users);
users[0].languages.push("php"); // ok
console.log(users);

// Example 3
let actions = [{ type: "ADD_TODO" }, { type: "REMOVE_TODO" }];

for (const action of actions) {
  if (action.type === "created") {
    console.log("created"); // ok
  } else {
    console.log("remove");
  }
}

let Actions = [{ type: "ADD_TODO" }, { type: "REMOVE_TODO" }] as const;

// for (const action of Actions) {
//     if (action.type === 'created') { // error
//         console.log('created');

//     } else {
//         console.log('remove');
//     }
// }

for (const action of Actions) {
  if (action.type === "ADD_TODO") {
    // ok
    console.log("created");
  } else {
    console.log("remove");
  }
}
