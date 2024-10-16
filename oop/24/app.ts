// * 1
type Admin = {
  name: string;
  privileges: string[];
};

type Teachers = {
  name: string;
  startDate: Date;
};

// bad way
// type TeacherAdmin = {
//   name: string;
//   privileges: string[];
//   startDate: Date;
// };

// good way
type TeacherAdmin = Admin & Teachers;

let dolati: Teachers = {
  name: "Reza Dolati",
  startDate: new Date(),
};

const saeediRad: TeacherAdmin = {
  name: "MMD Amin Saeedi Rad",
  startDate: new Date(),
  privileges: ["Accept Comment", "generate discount code"],
};

// * 2
type Type1 = string | number;
type Type2 = number | boolean;

// let testVar = "test"; // error just number
// let testVar = true; // error  just number
let testVar: Type1 & Type2 = 12;
