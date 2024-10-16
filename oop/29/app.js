"use strict";
const showProp = (member) => {
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
