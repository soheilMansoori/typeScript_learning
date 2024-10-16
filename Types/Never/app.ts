type Soheil = { id: 1; name: "soheil" };
type Ahad = { id: 2; name: "ahad" };
type Masom = { id: 3; name: "masom" };

type Admin = Soheil | Ahad | Masom;

const adminLogin = (admin: Admin) => {
  switch (admin.name) {
    case "soheil": {
      return console.log("soheil admin login");
    }
    case "masom": {
      return console.log("soheil admin login");
    }
    case "ahad": {
      return console.log("soheil admin login");
    }
    default: {
      let neverVariable: never = admin;
      return neverVariable;
    }
  }
};

const makeError = (error: string): never => {
  throw new Error(error);
  // return error
};

makeError("error message");
