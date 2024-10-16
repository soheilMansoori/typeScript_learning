// MappedType in type script

// interface Users {
//   name: string;
//   email: string;
//   phone: number;
// }

// // dry !!!!!
// interface OptionalUsers {
//   name?: string;
//   email?: string;
//   phone?: number;
// }

// const soheilUser: Users = {
//   name: "soheil",
//   email: "soheil@gmail.com",
//   phone: 9109336202,
// };
// const mohsenUser: OptionalUsers = {};

interface Users {
  name: string;
  email: string;
  phone: number;
}

// for in loop in types => update Users interface to optional
type OptionalUsers = {
  [key in keyof Users]?: Users[key];
};

// update Users interface to readonly
type ReadonlyUsers = {
  readonly [key in keyof Users]: Users[key];
};

const soheilUser: Users = {
  name: "soheil",
  email: "soheil@gmail.com",
  phone: 9109336202,
};
const mohsenUser: OptionalUsers = { name: "mohsen" };
const mehdiUser: ReadonlyUsers = { name: "mehdi", email: "", phone: 912 };
console.log(mehdiUser.name);
// mehdiUser.name = "new-mehdi"; // error because readonly

// best way
interface Users2 {
  name: string;
  age: number;
  email: string;
  password: string | number;
}

type OptionalTypeGenerator<T> = {
  [key in keyof T]?: T[key];
};

type ReadOnlyTypeGenerator<T> = {
  readonly [key in keyof T]: T[key];
};

const ahadUser: Users2 = { name: "ahad", age: 55, email: "", password: "" };

// create readonly type
const ahadOptionalUser: OptionalTypeGenerator<Users2> = {};

// create readonly type
const ahadReadonlyUser: ReadOnlyTypeGenerator<Users2> = {
  name: "ahad",
  age: 55,
  email: "",
  password: "",
};
