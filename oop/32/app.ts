import add, { isLogin, userNumber } from "./func.js";

console.log(userNumber);

console.log(
  isLogin({
    name: "amin",
    email: "amin@gmail.com",
    age: 23,
  })
);

console.log(`Sum => ${add(12, 8)}`);
