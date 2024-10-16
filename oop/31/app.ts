// index type

// interface Errors {
//   name: string;
//   password: string;
//   email: string;
// }

// const loginFormErrors: Errors = {
//   name: "soheil",
//   password: "soheil1382",
//   email: "soheil1382@gmail.com",
//   //   address: "", // error
// };

interface Errors {
  name: string;
  password: string;
  email: string;
  [props: string]: string;
}

const regesterFormErrors: Errors = {
  name: "soheil",
  password: "soheil-1382",
  email: "soheil-1382@gmail.com",
  address: "my address",
  phone: "09109336202",
};
