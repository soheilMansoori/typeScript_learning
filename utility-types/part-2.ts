type UnionType = number | string | boolean | null | undefined;

// delete type or types from one type
type NameUnionType = Exclude<UnionType, undefined | number | boolean>;

// delete undefined and null values
type TruthyUnionType = NonNullable<UnionType>;

let name: NameUnionType = null;
name = "soheil";
// name = 12 // error

let myVar: TruthyUnionType = "soheil";

// myVar = undefined // error
// myVar = null // error

type AdminsName = "SOHEIL" | "AHAD" | "MASOM";
type AdminInfo = { name: string; password: string };
type AdminRecord = Record<AdminsName, AdminInfo>;

const admins: AdminRecord = {
  SOHEIL: { name: "soheil", password: "mern-1382" },
  AHAD: { name: "ahad", password: "master-2024" },
  MASOM: { name: "masom", password: "1356" },
};

export {};
