class Person {
  name: string;
  age: number;
  email: string;
  constructor(name: string, email: string, age: number) {
    this.name = name;
    this.email = email;
    this.age = age;
  }
}

const soheilPerson = new Person("soheil", "soheol@gmail.com", 21);
console.log(soheilPerson);

// const ahadPerson: Person = ""; // error
const ahadPerson: Person = { name: "ahad", email: "ahad@gmail.com", age: 56 };
const aliPerson: Person = soheilPerson;

// const persons: Person[] = [{}]; // error
const persons: Person[] = [
  soheilPerson,
  ahadPerson,
  { name: "masom", email: "masom@gmail.com", age: 45 },
];
