// * 1
type Admin = {
  type: "ADMIN";
  name: string;
  privileges: string[];
};

type Teacher = {
  type: "TEACHER";
  name: string;
  startDate: Date;
};

const showProp = (member: Admin | Teacher) => {
  // if ("startDate" in member) {
  //   console.log(member.startDate);
  // } else if ("privileges" in member) {
  //   console.log(member.privileges);
  // }

  switch (member.type) {
    case "ADMIN": {
      console.log(member.privileges);
      break;
    }
    case "TEACHER": {
      console.log(member.startDate);
      break;
    }
    default: {
      throw new Error("Invalid Member !!");
    }
  }
};
