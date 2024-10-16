// !!!!!!! first fix that in tsconfig  "experimentalDecorators": true !!!!!!
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorator Function
function logger1(constructor) {
    // console.log("run one time Logger1 Decorator Called !!!", constructor);
    constructor.prototype.id = crypto.randomUUID();
}
// Decorator Factory
function logger2(param) {
    return (constructor) => {
        // console.group("logger2 Decorator");
        // console.log("run one time Logger2 Decorator Called !!!", constructor);
        // constructor.prototype.id = param;
        // console.groupEnd();
    };
}
let Person = class Person {
    constructor(name, age, password) {
        this.name = name;
        this.age = age;
        this.password = password;
        this.name = name;
        this.age = age;
        this.password = password;
    }
    speck(word) {
        // console.log(`${this.name} specks  ${word}`);
    }
};
Person = __decorate([
    logger2(18)
], Person);
///////////////////////////////////////////////////////
function InsertToDom(element) {
    return (constructor) => {
        // console.log("InsertToDom Decorator run and constructor => ", constructor);
        const rootElem = document.getElementById("root");
        if (rootElem) {
            rootElem.innerHTML = element;
        }
        else {
            throw new Error("root element not Found !!!");
        }
    };
}
let Dom = class Dom {
    constructor() { }
};
Dom = __decorate([
    InsertToDom("<h1>TS Decorator Function</h1>") // run second
    ,
    logger1 // run first
], Dom);
///////////////////////////////////////////////////////
///////////////////////////////////////////////////////
function LowerCase(target, methodName, descriptor) {
    // console.group("LowerCase Decorator");
    // console.log("this is => ", this); // window
    // console.log("target => ", target);
    // console.log("methodName => ", methodName);
    // console.log("descriptor => ", descriptor);
    // add option toLowerCase
    const mainMethod = descriptor.value;
    // mainMethod.call(this); // run speck method
    // overwrite method
    descriptor.value = function (value) {
        // console.log("this is => ", this); // Users class
        mainMethod.call(this, value.toLowerCase()); // after that run speck method with call to know this key word
    };
    // console.groupEnd();
}
function UpperCase(target, methodName, descriptor) {
    const mainMethod = descriptor.get;
    descriptor.get = function () {
        const response = mainMethod === null || mainMethod === void 0 ? void 0 : mainMethod.call(this);
        return response.toUpperCase();
    };
}
function setName(target, methodName, descriptor) {
    const mainMethod = descriptor.set;
    descriptor.set = function (newName) {
        mainMethod === null || mainMethod === void 0 ? void 0 : mainMethod.call(this, `set =>  ${newName}`);
    };
}
function MinLength(limit) {
    return function (target, propertyKey) {
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
function Min(limit) {
    return (target, propertyKey) => {
        console.group("Min Decorator");
        // console.log("this => ", this);
        console.log("limit => ", limit);
        console.log("target => ", target);
        console.log("propertyKey => ", propertyKey);
        let value;
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
        const setter = function (newVal) {
            console.group("logs in Min setter");
            console.log("newVal is => ", newVal);
            console.log("this in setter => ", this);
            if (newVal.length < limit) {
                let error = {
                    type: propertyKey,
                    message: `Your password must be greater than ${limit}`,
                };
                let errors = this.errors;
                console.log("ERRORS: ", errors);
                // Here I wanted to update the errors field, and I accessed it using this["errors"]. This will get all the errors and push the new error.
                errors.push(error);
                Object.defineProperty(target, "errors", {
                    value: errors,
                });
            }
            else {
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
function Max(limit) {
    return (target, propertyKey) => {
        console.group("Max Decorator");
        // console.log("this => ", this);
        console.log("limit => ", limit);
        console.log("target => ", target);
        console.log("propertyKey => ", propertyKey);
        console.groupEnd();
        let value;
        const setter = function (newValue) {
            console.group("logs in Max setter");
            console.log("new value is => ", newValue);
            if (newValue.length > limit) {
                const errors = this.errors;
                const newError = {
                    type: propertyKey,
                    message: `Your password must be smaller than ${limit}`,
                };
                errors.push(newError);
                Object.defineProperty(target, "errors", {
                    value: errors,
                });
            }
            else {
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
class Users {
    constructor(name, lastName, email, job, password, test) {
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.errors = [];
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.job = job;
        this.password = password;
        this.test = test;
    }
    speck(word) {
        console.log(`user ${this.name} specks ${word}`);
    }
    get getFullName() {
        return `full name is => ${this.name} ${this.lastName}`;
    }
    set setName(newName) {
        this.name = newName;
    }
}
__decorate([
    MinLength(5)
], Users.prototype, "job", void 0);
__decorate([
    Min(5),
    Max(12)
], Users.prototype, "password", void 0);
__decorate([
    LowerCase
], Users.prototype, "speck", null);
__decorate([
    UpperCase
], Users.prototype, "getFullName", null);
__decorate([
    setName
], Users.prototype, "setName", null);
const soheil = new Users("soheil", "mansoori", "soheil@gmail.com", "js dev", "soheil1382", "test");
console.log("soehil errors is", soheil.errors);
console.log("soheil password is", soheil.password);
console.log("soheil test is => ", soheil.test);
// soheil.speck("HI TS");
// console.log(soheil.getFullName);
soheil.setName = "new soheil name";
// console.log(soheil.name);
///////////////////////////////////////////////////////
//# sourceMappingURL=app.js.map