// reference
// https://medium.com/@InspireTech/what-are-decorators-in-typescript-and-how-to-use-decorators-d82d15c5851f

// // Deep-Learn-Decorators

// // class Decorator
// function classDecorator(param: string) {
//   console.log("param is => ", param);
//   // HOF
//   return (constructor: Function): void => {
//     console.log("class created and constructor function => ", constructor);
//   };
// }

// // method Decorator
// function infoDecorator(
//   target: any,
//   propertyKey: string,
//   descriptor: PropertyDescriptor
// ) {
//   console.log("target => ", target);
//   console.log("propertyKey => ", propertyKey);
//   console.log("descriptor => ", descriptor);
// }

// // Person class
// @classDecorator("person")
// class Person {
//   constructor(
//     private name: string,
//     private age: number,
//     private password: string,
//     private email: string
//   ) {
//     this.name = name;
//     this.age = age;
//     this.password = password;
//     this.email = email;
//   }

//   @infoDecorator
//   info() {
//     return {
//       name: this.name,
//       age: this.age,
//       password: this.password,
//       email: this.email,
//     };
//   }

//   get getName() {
//     return `person name is ${this.name} `;
//   }
//   get getAge() {
//     return `person age is ${this.age} `;
//   }
//   get getPassword() {
//     return `person password is ${this.password} `;
//   }
//   get gerEmail() {
//     return `person email is ${this.email} `;
//   }
// }

// const soheilPerson: Person = new Person(
//   "soheil",
//   21,
//   "soheil-1382",
//   "soheil@gmail.com"
// );
// console.log("soheil person info", soheilPerson.info());

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// // types
// type User = {
//   id: string;
//   name: string;
// };

// // Authorize Decorator (method Decorator)
// function Authorize(role: string) {
//   return function (
//     target: any,
//     propertyKey: string,
//     descriptor: PropertyDescriptor
//   ) {
//     // console.log("target => ", target);
//     // console.log("propertyKey => ", propertyKey);
//     // console.log("descriptor => ", descriptor);

//     const originalMethod = descriptor.value;

//     descriptor.value = function (...args: any[]) {
//       // Check if user has allowedRoles
//       const allowedRoles: string[] = ["ADMIN", "SUPER_ADMIN"]; // Simulating user roles
//       const isAuthorized = allowedRoles.some((allowRole) => allowRole === role);

//       // check is Authorized
//       if (!isAuthorized) {
//         console.log("method not run role not allow", allowedRoles);
//         return "user not Authorized";
//       }

//       // run method
//       return originalMethod.apply(this, args);
//     };
//   };
// }

// // check user exists Decorator (method Decorator)
// function CheckUserExists(
//   target: any,
//   propertyKey: string,
//   descriptor: PropertyDescriptor
// ) {
//   // main method
//   const originalMethod = descriptor.value;

//   // run function
//   descriptor.value = function (userID: string) {
//     // check is user exists
//     const isUserExists = this.users.some((user) => user.id === userID);

//     if (!isUserExists) {
//       return this.sendErrorMessage("user not found");
//     }

//     // run method and send arguments
//     return originalMethod.call(this, userID);
//   };
// }

// // max length Decorator (property Decorator)
// function MaxLength(limit: number) {
//   return (target: any, propertyKey: string) => {
//     // default value
//     let value: string;

//     // getter
//     const get = function () {
//       // console.log("this in getter => ", this);
//       return value;
//     };

//     // setter
//     const set = function (newValue: string) {
//       // console.log("this in setter => ", this);
//       if (newValue.length > limit) {
//         return console.log(
//           this.sendErrorMessage(
//             `${propertyKey} length must be maximum ${limit}`
//           )
//         );
//       }

//       // set data first time
//       return Object.defineProperty(target, propertyKey, { value: newValue });
//     };

//     console.groupEnd();

//     // create property
//     return Object.defineProperty(target, propertyKey, {
//       configurable: true,
//       get,
//       set,
//     });
//   };
// }
// Admin panel class
// class AdminPanel {
//   // users array
//   private users: User[] = [
//     { id: "1", name: "soheil" },
//     { id: "2", name: "ahad" },
//     { id: "3", name: "masom" },
//     { id: "4", name: "mehdi" },
//     { id: "5", name: "mohsen" },
//   ];

//   @MaxLength(12)
//   name: string = "soheil";

//   constructor() {}

//   // delete one user
//   @Authorize("ADMIN")
//   @CheckUserExists
//   deleteUser(userId: string) {
//     // delete user
//     this.users = this.users.filter((user) => user.id !== userId);

//     // Delete user and send response
//     return "method run and user delete successfully";
//   }

//   // get all users
//   @Authorize("ADMIN")
//   getUsers() {
//     return this.users;
//   }

//   // send error message
//   sendErrorMessage(message: string) {
//     return message;
//   }
// }

// const adminPanel = new AdminPanel();
// console.log("adminPanel.name", adminPanel.name);
// console.log("get all users before delete => ", adminPanel.getUsers());
// console.log("delete user result => ", adminPanel.deleteUser("4"));
// console.log("get all users after delete => ", adminPanel.getUsers());
