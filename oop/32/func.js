const isLogin = (user) => {
    if (user.name === "amin") {
        return true;
    }
    else {
        return false;
    }
};
const add = (num1, num2) => num1 + num2;
const userNumber = 12;
export { isLogin, userNumber };
export default add;
