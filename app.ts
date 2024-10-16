let age: number = 12;
console.log(`my age is ${age}`);

// global types
declare global {
  // users interface
  interface User {
    name: string;
    age: number;
    password: string;
    phone: string;
  }
  // server error interface
  interface ServerError {
    message: string;
    status: number;
    ok: boolean;
  }
}

// declare global types
declare global {
  interface User {
    email: string;
  }
}

// soheil user
const soheilUser: User = {
  name: "soheil",
  age: 21,
  password: "1382",
  phone: "09109336202",
  email: "soheil@gmail.com",
};
console.log("soheil user => ", soheilUser);

// server error
const serverError: ServerError = {
  message: "internal server error",
  status: 500,
  ok: false,
};

console.log("serverError => ", serverError);

export {};
