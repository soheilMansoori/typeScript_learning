function login(
  name: string,
  password: string | number,
  age: number,
  phone: number
) {
  if (name && password && age && phone) {
    return true;
  } else {
    return false;
  }
}

console.log(login("soheil", 1382, 20, 9109336202));

function returnFunc(test1: string, test2: string): boolean {
  return false;
}

console.log(returnFunc("test1", "test2"));
