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
