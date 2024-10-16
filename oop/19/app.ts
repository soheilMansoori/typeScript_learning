interface Users {
  readonly name: string;
  age: number;
  password: string | number;
  job: string;
}

const soheilUser: Users = {
  name: "soheil",
  age: 21,
  job: "js web full stack",
  password: "soheil-1382",
};

// soheilUser.name = 'new soheil name' // error because readonly
soheilUser.age = 22; // ok
