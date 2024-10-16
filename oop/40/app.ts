// what deferent Generic Type and Union Type ?

// Generic Type
class Users<T> {
  private users: T[] = [];

  addUser(newUser: T) {
    this.users.push(newUser);
  }

  removeUser(): T | undefined {
    return this.users.pop();
  }
}

const users = new Users<string>();
users.addUser("soheil"); // ok
// users.addUser(12); // error

// Union Type
class Users2 {
  private users: (boolean | number | string)[] = [];

  addUser(newUser: boolean | number | string) {
    this.users.push(newUser);
  }

  removeUser(): (boolean | number | string) | undefined {
    return this.users.pop();
  }
}

const user2 = new Users2();
user2.addUser("soheil"); // ok
user2.addUser(12); // ok
user2.addUser(true); // ok
