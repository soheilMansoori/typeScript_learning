interface User {
  name: string;
  email: string;
  age: number;
}

const isLogin = (user: User) => {
  if (user.name === "amin") {
    return true;
  } else {
    return false;
  }
};

const add = (num1: number, num2: number): number => num1 + num2;

const userNumber = 12;

export { isLogin, userNumber };

export default add;
