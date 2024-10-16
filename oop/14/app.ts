// create pattern with interface
interface userData {
  name: string;
  age: number;
  login(): boolean;
}

const user: userData = {
  name: "soheil",
  age: 21,
  login() {
    return true;
  },
};

const isUserLogin = (userData: userData): boolean => {
  if (userData.name == "soheil") {
    return true;
  } else {
    return false;
  }
};

console.log(isUserLogin({ name: "soheil", age: 21, login: () => false }));
