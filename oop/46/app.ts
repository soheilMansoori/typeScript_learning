function Max(limit: number) {
  return (target: any, propertyKey: string) => {
    console.group("Max Decorator");
    // console.log("this => ", this);
    console.log("limit => ", limit);
    console.log("target => ", target);
    console.log("propertyKey => ", propertyKey);
    console.groupEnd();

    let value: string;
    const setter = function (newValue: string) {
      console.group("logs in Max setter");
      console.log("new value is => ", newValue);
      if (newValue.length > limit) {
        const errors: ValidationError[] = this.errors;
        const newError: ValidationError = {
          type: propertyKey,
          message: `Your password must be smaller than ${limit}`,
        };
        errors.push(newError);

        Object.defineProperty(target, "errors", {
          value: errors,
        });
      } else {
        value = newValue;
      }
      console.groupEnd();
    };
    const getter = function () {
      console.group("logs in Max getter");
      console.log("value is => ", value);
      console.groupEnd();
      return value;
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      configurable: true,
    });
  };
}
function Min(limit: number) {
  return (target: Object, propertyKey: string) => {
    console.group("Min Decorator");
    // console.log("this => ", this);
    console.log("limit => ", limit);
    console.log("target => ", target);
    console.log("propertyKey => ", propertyKey);

    let value: string;

    // cant get property value here
    console.log("Orignal Value ", target[propertyKey]); // undefined
    console.log("Original Value ", this[propertyKey]); //undefined

    const getter = function () {
      console.group("logs in Min getter");
      console.log("value is => ", value);
      console.log("this in getter => ", this);
      console.groupEnd();
      return value;
    };

    const setter = function (newVal: string) {
      console.group("logs in Min setter");
      console.log("newVal is => ", newVal);
      console.log("this in setter => ", this);

      if (newVal.length < limit) {
        let error: ValidationError = {
          type: propertyKey,
          message: `Your password must be greater than ${limit}`,
        };
        let errors: ValidationError[] = this.errors;
        console.log("ERRORS: ", errors);
        // Here I wanted to update the errors field, and I accessed it using this["errors"]. This will get all the errors and push the new error.
        errors.push(error);
        Object.defineProperty(target, "errors", {
          value: errors,
        });
      } else {
        value = newVal;
      }
      console.groupEnd();
    };

    Object.defineProperty(target, propertyKey, {
      get: getter,
      set: setter,
      configurable: true,
    });
    console.groupEnd();
  };
}

type ValidationError = {
  type: string;
  message: string;
};

class Users {
  public errors: ValidationError[] = [];
  @Min(4) // کار میکنه
  public name: string;
  @Max(12) // کار میکنه
  public family: string;
  @Min(4) // اینجا کار نمیکنه نمیشه از هر دو استفاده کرد
  @Max(12) // اینجا کار نمیکنه نمیشه از هر دو استفاده کرد
  public password: string;
  constructor(name: string, family: string, password: string) {
    this.name = name;
    this.family = family;
    this.password = password;
  }
}

const soheilUser = new Users("soheil", "mansoori", "soheil1382");
console.log("soheilUser errors => ", soheilUser.name);
console.log("soheilUser errors => ", soheilUser.family);
console.log("soheilUser errors => ", soheilUser.password);
console.log("soheilUser errors => ", soheilUser.errors);

console.log(
  "soheilUser errors => ",
  (soheilUser.name = "asdasdasdasdasdasdsaddasd")
);
console.log("soheilUser errors => ", (soheilUser.family = ""));
console.log(
  "soheilUser errors => ",
  (soheilUser.password = "adasdasdasdsadsadasdasdasdasassad")
);
console.log("soheilUser errors => ", soheilUser.errors);
