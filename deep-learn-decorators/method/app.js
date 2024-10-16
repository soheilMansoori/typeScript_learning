var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
//////////////////////////////////////////// Decorators
/*
  This function, like the function above the class, is executed when the class is created,
  but it does not allow the execution of the method, and it can be customized or give a different output.
*/
// auth
function Auth(role) {
    // HOF
    return (target, propertyKey, descriptor) => {
        // original method
        const originalMethod = descriptor.value;
        descriptor.value = function (...args) {
            // allow roles
            const allowRoles = ["ADMIN", "SUPER_ADMIN"];
            // check is isAuthorization
            const isAuthorization = allowRoles.some((allowRole) => allowRole === role);
            if (!isAuthorization) {
                return "forbidden 403";
            }
            // run original method
            return originalMethod.call(this, ...args);
        };
    };
}
// check is user exists
function CheckUserExists(target, propertyKey, descriptor) {
    // original method
    const originalMethod = descriptor.value;
    descriptor.value = function (userID) {
        // find main user
        const isUserExists = this.users.find((user) => user.id === userID);
        // send error message when user not found
        if (!isUserExists) {
            return `User Not Found With ID ${userID}`;
        }
        // run main method
        return originalMethod.call(this, userID);
    };
}
////////////////////////////////////////// Class
class AdminPanel {
    // delete all users
    getUsers() {
        return this.users;
    }
    // get one user
    getUser(userID) {
        return this.users.find((user) => user.id === userID);
    }
    constructor(username, password) {
        this.username = username;
        this.password = password;
        this.users = [
            {
                id: "1",
                username: "soheil",
                age: 21,
                password: "soheil-1382",
                role: "ADMIN",
            },
            {
                id: "2",
                username: "masom",
                age: 48,
                password: "masom-1356",
                role: "USER",
            },
            {
                id: "3",
                username: "ahad",
                age: 56,
                password: "master-2024",
                role: "USER",
            },
        ];
        this.username = username;
        this.password = password;
    }
    // delete one user
    deleteUser(userID) {
        this.users = this.users.filter((user) => user.id !== userID);
        return "User Deleted Successfully";
    }
}
__decorate([
    Auth("ADMIN")
], AdminPanel.prototype, "getUsers", null);
__decorate([
    Auth("ADMIN"),
    CheckUserExists
], AdminPanel.prototype, "getUser", null);
__decorate([
    Auth("ADMIN"),
    CheckUserExists
], AdminPanel.prototype, "deleteUser", null);
// soheil admin
const soheilAdmin = new AdminPanel("soheil", "soheil-1382");
console.log("users => ", soheilAdmin.users);
console.log("get one users => ", soheilAdmin.getUser("1"));
console.log("delete one user => ", soheilAdmin.deleteUser("3"));
console.log("users => ", soheilAdmin.users);
