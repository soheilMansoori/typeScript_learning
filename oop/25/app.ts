// * 1
type Admin = {
  name: string;
  privileges: string[];
};

type Teacher = {
  name: string;
  startDate: Date;
};

const showProp = (member: Admin | Teacher) => {
  if ("startDate" in member) {
    console.log(member.startDate);
  } else if ("privileges" in member) {
    console.log(member.privileges);
  }
};

const reza: Teacher = {
  name: "Reza Dolati",
  startDate: new Date(),
};

const amin: Admin = {
  name: "Reza Dolati",
  privileges: ["Accept Comment", "Remove Comment"],
};

showProp(amin);
