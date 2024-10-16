class Users {
  constructor(
    public name: string,
    public password: string | number,
    public age: number
  ) {
    this.name = name;
    this.password = password;
    this.age = age;
  }
  // info
  public info(): void {
    console.log(
      `name is => ${this.name} , password is => ${this.password} , age is => ${this.age}`
    );
  }
}
class Students extends Users {
  constructor(
    name: string,
    password: string | number,
    age: number,
    public lessons: string[]
  ) {
    super(name, password, age);
    this.lessons = lessons;
  }

  // info Overwrite here
  public info(): void {
    console.log(
      `name is => ${this.name} , password is => ${this.password} , age is => ${this.age} , lessons is => ${this.lessons}`
    );
  }
}

const soheilStudent = new Students("soheil", "soheil1382", 21, [
  "ts",
  "tailwind",
]);

soheilStudent.info();
