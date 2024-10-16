var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Length, Matches, Max, Min, validate } from "class-validator";
var User = /** @class */ (function () {
    function User(firstName, lastName, email, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.email = email;
        this.age = age;
    }
    __decorate([
        Length(5, 12)
    ], User.prototype, "firstName", void 0);
    __decorate([
        Length(5, 12)
    ], User.prototype, "lastName", void 0);
    __decorate([
        Matches(/[^@ \t\r\n]+@[^@ \t\r\n]+\.[^@ \t\r\n]+/, {
            message: "custom error message",
        })
    ], User.prototype, "email", void 0);
    __decorate([
        Min(18),
        Max(100)
    ], User.prototype, "age", void 0);
    return User;
}());
var soheilUser = new User("soheil", "mansoori", "@gmail.com", 101);
console.log("soheilUser is => ", soheilUser);
// validate class values
validate(soheilUser).then(function (errors) {
    // errors is an array of validation errors
    if (errors.length) {
        // console.log("validation failed. errors: ", errors);
        var result = errors.map(function (error) { return ({
            property: error.property,
            message: error.constraints &&
                error.constraints[Object.keys(error.constraints)[0]],
        }); });
        console.log("result => ", result);
    }
    else {
        console.log("validation succeed");
    }
});
