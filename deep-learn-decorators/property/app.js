var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function MaxAge(limit) {
    return (target, propertyKey) => {
        console.group("\n Max Age");
        console.log("MaxAge target", target);
        console.log("MaxAge propertyKey", propertyKey);
        // value
        let value = target[propertyKey];
        // getter
        const get = function () {
            return value;
        };
        // setter
        const set = function (newValue) {
            console.log("MaxAge setter run with value", newValue);
            if (newValue > limit) {
                const message = `age maximum must be ${limit}`;
                throw new Error(message);
            }
            return Object.defineProperty(target, propertyKey, {
                value: newValue,
                enumerable: true,
                configurable: true,
            });
        };
        console.groupEnd();
        // create property
        return Object.defineProperty(target, propertyKey, {
            configurable: true,
            enumerable: true,
            set,
            get,
        });
    };
}
function MinAge(limit) {
    return (target, propertyKey) => {
        console.group("\n Min Age");
        console.log("MinAge target", target);
        console.log("MinAge propertyKey", propertyKey);
        // value
        let value = target[propertyKey];
        // getter
        const get = function () {
            return value;
        };
        // setter
        const set = function (newValue) {
            console.log("MinAge setter run with value", newValue);
            if (limit > newValue) {
                const message = `age minimum must be ${limit}`;
                throw new Error(message);
            }
            return Object.defineProperty(target, propertyKey, { value: newValue });
        };
        console.groupEnd();
        //
        return Object.defineProperty(target, propertyKey, {
            configurable: true,
            enumerable: true,
            set,
            get,
        });
    };
}
function AgeRange(min, max) {
    return (target, propertyKey) => { };
}
class User {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // get info
    info() {
        return `name:${this.name} age:${this.age}`;
    }
}
__decorate([
    AgeRange(18, 100)
], User.prototype, "age", void 0);
const soheilUser = new User("soheil", 121);
// console.log("soheilUser => ", soheilUser.info());
export default User;
