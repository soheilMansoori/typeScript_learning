// const user: {
//   id: number;
//   name: string;
//   age: number;
//   role: string;
// } = {
//   id: 1,
//   name: "soheil",
//   age: 21,
//   role: "ADMIN",
// };

// // bug ???
// if (user.role === "ADMIn") {
//   console.log("You Are Admin");
// } else {
//   console.log("You Are Not Admin");
// }

// way-1 fix with pure js
// const Admin = "ADMIN";
// const User = "USER";
// const Teacher = "TEACHER";

// const user: {
//   id: number;
//   name: string;
//   age: number;
//   role: string;
// } = {
//   id: 1,
//   name: "soheil",
//   age: 21,
//   role: Admin,
// };

// // bug fixed
// if (user.role === Admin) {
//   console.log("You Are Admin");
// } else {
//   console.log("You Are Not Admin");
// }

// way-2 fix with TS enum
enum Role {
  Admin,
  User,
  Teacher,
}
console.log("enum Role => ", Role);
const user: {
  id: number;
  name: string;
  age: number;
  role: Role;
} = {
  id: 1,
  name: "soheil",
  age: 21,
  role: Role.Admin,
};

// bug fixed better
if (user.role === Role.Admin) {
  console.log("You Are Admin");
} else {
  console.log("You Are Not Admin");
}
