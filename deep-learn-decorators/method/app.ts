////////////////////////////////////////// Types
type User = {
  id: string;
  username: string;
  age: number;
  password: string;
  role: "ADMIN" | "USER";
};

//////////////////////////////////////////// Decorators
/*
  This function, like the function above the class, is executed when the class is created,
  but it does not allow the execution of the method, and it can be customized or give a different output.
*/

// auth
function Auth(role: string) {
  // HOF
  return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
    // original method
    const originalMethod = descriptor.value;

    descriptor.value = function (...args: any[]) {
      // allow roles
      const allowRoles = ["ADMIN", "SUPER_ADMIN"];

      // check is isAuthorization
      const isAuthorization = allowRoles.some(
        (allowRole) => allowRole === role
      );

      if (!isAuthorization) {
        return "forbidden 403";
      }

      // run original method
      return originalMethod.call(this, ...args);
    };
  };
}

// check is user exists
function CheckUserExists(
  target: any,
  propertyKey: string,
  descriptor: PropertyDescriptor
) {
  // original method
  const originalMethod = descriptor.value;

  descriptor.value = function (userID: string) {
    // find main user
    const isUserExists = this.users.find(
      (user: { id: string }) => user.id === userID
    );

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
  users: User[] = [
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

  // delete all users
  @Auth("ADMIN")
  getUsers() {
    return this.users;
  }

  // get one user
  @Auth("ADMIN")
  @CheckUserExists
  getUser(userID: string) {
    return this.users.find((user) => user.id === userID);
  }

  constructor(private username: string, private password: string) {
    this.username = username;
    this.password = password;
  }

  // delete one user
  @Auth("ADMIN")
  @CheckUserExists
  deleteUser(userID: string) {
    this.users = this.users.filter((user) => user.id !== userID);
    return "User Deleted Successfully";
  }
}

// soheil admin
const soheilAdmin = new AdminPanel("soheil", "soheil-1382");
console.log("users => ", soheilAdmin.users);
console.log("get one users => ", soheilAdmin.getUser("1"));
console.log("delete one user => ", soheilAdmin.deleteUser("3"));
console.log("users => ", soheilAdmin.users);
