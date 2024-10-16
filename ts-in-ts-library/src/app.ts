import { Length, Matches, Max, Min, validate } from "class-validator";

class User {
  @Length(5, 12)
  firstName: string;
  @Length(5, 12)
  lastName: string;
  @Matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, {
    message: "custom error message",
  })
  email: string;
  @Min(18)
  @Max(100)
  age: number;
  constructor(firstName: string, lastName: string, email: string, age: number) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.age = age;
  }
}

const soheilUser = new User("soheil", "mansoori", "@gmail.com", 101);
console.log("soheilUser is => ", soheilUser);

// validate class values
validate(soheilUser).then((errors) => {
  // errors is an array of validation errors
  if (errors.length) {
    // console.log("validation failed. errors: ", errors);
    const result = errors.map((error) => ({
      property: error.property,
      message:
        error.constraints &&
        error.constraints[Object.keys(error.constraints)[0]],
    }));
    console.log("result => ", result);
  } else {
    console.log("validation succeed");
  }
});
