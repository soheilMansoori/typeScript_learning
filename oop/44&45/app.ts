// !!!!!!! first fix that in tsconfig  "experimentalDecorators": true !!!!!!

// Decorator Function
function logger1(constructor: Function) {
  // console.log("run one time Logger1 Decorator Called !!!", constructor);
  constructor.prototype.id = crypto.randomUUID();
}

// Decorator Factory
function logger2(param: number) {
  return (constructor: Function) => {
    // console.group("logger2 Decorator");
    // console.log("run one time Logger2 Decorator Called !!!", constructor);
    // constructor.prototype.id = param;
    // console.groupEnd();
  };
}

@logger2(18)
class Person {
  constructor(
    public name: string,
    public age: number,
    public password: string | number
  ) {
    this.name = name;
    this.age = age;
    this.password = password;
  }

  speck(word: string) {
    // console.log(`${this.name} specks  ${word}`);
  }
}

///////////////////////////////////////////////////////
function InsertToDom(element: string) {
  return (constructor: Function) => {
    // console.log("InsertToDom Decorator run and constructor => ", constructor);
    const rootElem = document.getElementById("root") as HTMLDivElement;
    if (rootElem) {
      rootElem.innerHTML = element;
    } else {
      throw new Error("root element not Found !!!");
    }
  };
}

@InsertToDom("<h1>TS Decorator Function</h1>") // run second
@logger1 // run first
class Dom {
  constructor() {}
}
///////////////////////////////////////////////////////

///////////////////////////////////////////////////////
function LowerCase(
  target: Object,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  // console.group("LowerCase Decorator");
  // console.log("this is => ", this); // window
  // console.log("target => ", target);
  // console.log("methodName => ", methodName);
  // console.log("descriptor => ", descriptor);

  // add option toLowerCase
  const mainMethod = descriptor.value;
  // mainMethod.call(this); // run speck method

  // overwrite method
  descriptor.value = function (value: string) {
    // console.log("this is => ", this); // Users class

    mainMethod.call(this, value.toLowerCase()); // after that run speck method with call to know this key word
  };
  // console.groupEnd();
}

function UpperCase(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const mainMethod = descriptor.get;

  descriptor.get = function () {
    const response: string = mainMethod?.call(this);
    return response.toUpperCase();
  };
}

function setName(
  target: any,
  methodName: string,
  descriptor: PropertyDescriptor
) {
  const mainMethod = descriptor.set;
  descriptor.set = function (newName: string) {
    mainMethod?.call(this, `set =>  ${newName}`);
  };
}

function MinLength(limit: number) {
  return function (target, propertyKey: string) {
    // console.group("MinLength Decorator");
    // console.log("this => ", this);
    // console.log("limit => ", limit);
    // console.log("target => ", target);
    // console.log("propertyKey => ", propertyKey);
    // console.groupEnd();
    // if (limit > target[propertyKey].length) {
    //   throw new Error(`${propertyKey} length most ${limit}`);
    // }
  };
}

// TASK
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

type ValidationError = {
  type: string;
  message: string;
};

class Users {
  errors: ValidationError[] = [];
  @MinLength(5)
  public job: string;
  public test: string;
  @Min(5)
  @Max(12)
  public password: string;

  constructor(
    public name: string,
    public lastName: string,
    public email: string,
    job: string,
    password: string,
    test: string
  ) {
    this.name = name;
    this.lastName = lastName;
    this.email = email;
    this.job = job;
    this.password = password;
    this.test = test;
  }

  @LowerCase
  speck(word: string) {
    console.log(`user ${this.name} specks ${word}`);
  }
  @UpperCase
  get getFullName(): string {
    return `full name is => ${this.name} ${this.lastName}`;
  }
  @setName
  set setName(newName: string) {
    this.name = newName;
  }
}

const soheil = new Users(
  "soheil",
  "mansoori",
  "soheil@gmail.com",
  "js dev",
  "soheil1382",
  "test"
);
console.log("soehil errors is", soheil.errors);
console.log("soheil password is", soheil.password);
console.log("soheil test is => ", soheil.test);

// soheil.speck("HI TS");
// console.log(soheil.getFullName);
soheil.setName = "new soheil name";

// console.log(soheil.name);

///////////////////////////////////////////////////////
