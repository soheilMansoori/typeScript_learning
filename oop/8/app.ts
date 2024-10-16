class Teachers {
  // default public
  constructor(public name: string, public age: number, public email: string) {
    this.name = name;
    this.age = age;
    this.email = email;
  }

  //   protected constructor(public name: string, public age: number, public email: string) {
  //     this.name = name;
  //     this.age = age;
  //     this.email = email;
  //   }

  //   private constructor(public name: string, public age: number, public email: string) {
  //     this.name = name;
  //     this.age = age;
  //     this.email = email;
  //   }
}

class Students extends Teachers {
  constructor(
    name: string,
    age: number,
    email: string,
    public lessons: string[]
  ) {
    super(name, age, email);
    this.lessons = lessons;
  }
}

const soheilStudent = new Students("soheil", 21, "soheil@example.com", [
  "ts",
  "tailwind",
]);
