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
}
class Students extends Users {
  private static count: number = 0;

  constructor(
    name: string,
    password: string | number,
    age: number,
    public lessons: string[]
  ) {
    super(name, password, age);
    this.lessons = lessons;
    Students.count++;
  }

  public static getCount(): number {
    return Students.count;
  }
}

const soheilStudent = new Students("soheil", "soheil1382", 21, [
  "ts",
  "tailwind",
]);

// console.log(soheilStudent.getCount); // error
console.log(Students.getCount);
