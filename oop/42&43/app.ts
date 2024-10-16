interface User {
  name: string;
  password: string | number;
  age?: number;
}

type Type1 = number | string | boolean | null | undefined;

// Utility Types
type RequiredUser = Required<User>; // all items required
type ReadonlyUser = Readonly<User>; // all items readonly
type PartialUser = Partial<User>; // all items optional
type PickUser = Pick<User, "name" | "password">; // pick name and password types
type Type2 = NonNullable<Type1>; // its like the nullish => cant use type  null or undefined

type Type3 = Exclude<Type1, string | number>; // ignore types and create new type => boolean | null | undefined
type Type4 = Omit<User, "age">; // ignore age item and create new type

///////////////////////////////////////
type Names = "Ali" | "Amin" | "Soheil";
type Person = { name: string; password: string | number };

type RecordType = Record<Names, Person>; // combine tow type in object Record<Key , Value>

const person: RecordType = {
  Ali: { name: "", password: "" },
  Amin: { name: "", password: "" },
  Soheil: { name: "", password: "" },
};
///////////////////////////////////////

const myUser: Type4 = { name: "soheil", password: "soheil-1382" };

let myVar: Type3 = true; // ok
myVar = null; // ok
myVar = undefined; // ok
// myVar = "" // error
// myVar = 12 // error

const soheilUser: User = { name: "soheil", password: "soheil-1382" };
const soheilRequiredUser: RequiredUser = {
  name: "soheil",
  password: "soheil-1382",
  age: 21,
};
const soheilReadonlyUser: ReadonlyUser = {
  name: "soheil",
  password: "soheil-1382",
};
// soheilReadonlyUser.name = "" // error  just readonly
const masomUser: PickUser = { name: "masom", password: "masom-1356" };

let var1: Type1 = null;
var1 = "";
var1 = 1;
var1 = true;
var1 = undefined;

// !!!!!!! first go to tsConfig and strictNullChecks : true !!!!!!
let var2: Type2 = "";
var1 = 1;
var1 = true;
var1 = null; // error
var1 = undefined; // error
