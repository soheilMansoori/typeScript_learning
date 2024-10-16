var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
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
class Users {
    constructor(name, family, password) {
        this.errors = [];
        this.name = name;
        this.family = family;
        this.password = password;
    }
}
__decorate([
    Min(4) // کار میکنه
], Users.prototype, "name", void 0);
__decorate([
    Max(12) // کار میکنه
], Users.prototype, "family", void 0);
__decorate([
    Min(4) // اینجا کار نمیکنه نمیشه از هر دو استفاده کرد
    ,
    Max(12) // اینجا کار نمیکنه نمیشه از هر دو استفاده کرد
], Users.prototype, "password", void 0);
const soheilUser = new Users("soheil", "mansoori", "soheil1382");
console.log("soheilUser errors => ", soheilUser.name);
console.log("soheilUser errors => ", soheilUser.family);
console.log("soheilUser errors => ", soheilUser.password);
console.log("soheilUser errors => ", soheilUser.errors);
console.log("soheilUser errors => ", (soheilUser.name = "asdasdasdasdasdasdsaddasd"));
console.log("soheilUser errors => ", (soheilUser.family = ""));
console.log("soheilUser errors => ", (soheilUser.password = "adasdasdasdsadsadasdasdasdasassad"));
console.log("soheilUser errors => ", soheilUser.errors);
