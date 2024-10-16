// user type
interface User {
  name: string;
  password: string | number;
  age?: number;
}

// create all items required type
type requiredUser = Required<User>;

// create all items readonly type
type readonlyUser = Readonly<User>;

// create all items optional type
type optionalUser = Partial<User>;

type userWithoutPassword = Omit<User, "password">;

// copy and create new type with name and password keys
type userWithNameAndPassword = Pick<User, "name" | "password">;

const soheilUser: User = {
  name: "soheil",
  password: "soheil-1382",
  //   age: 21,
};

const ahadUser: requiredUser = {
  name: "ahad",
  password: "master-2024",
  age: 56,
};

const masomUser: readonlyUser = {
  name: "masom",
  password: "masom-1356",
  age: 47,
};
// masomUser.age = 47 // error
// masomUser.name = "masom-2" // error
// masomUser.password = "error" // error

const mohsenUser: userWithNameAndPassword = {
  name: "mohsen",
  password: "mohsen-1368",
};

const mehdiUser: optionalUser = {};

const latifeUser: userWithoutPassword = { name: "latife", age: 63 };

export {};
