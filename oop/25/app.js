"use strict";
const showProp = (member) => {
    if ("startDate" in member) {
        console.log(member.startDate);
    }
    else if ("privileges" in member) {
        console.log(member.privileges);
    }
};
const reza = {
    name: "Reza Dolati",
    startDate: new Date(),
};
const amin = {
    name: "Reza Dolati",
    privileges: ["Accept Comment", "Remove Comment"],
};
showProp(amin);
