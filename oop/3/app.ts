class Users {
  name: string;
  age: number;
  email: string;
  constructor(name: string, age: number, email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }
}

class Students extends Users {
  lessons: string[];
  constructor(name: string, age: number, email: string, lessons: string[]) {
    super(name, age, email);
    this.lessons = lessons;
  }
}

const soheilStudent = new Students("soheil", 21, "soheil@eamil.com", [
  "ts",
  "tailwind",
]);

console.log(soheilStudent);
