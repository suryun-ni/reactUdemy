import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello JavaScript!</h1>
// `;

//The Spread Operator
//merge two list
const hobbies = ["football", "Cooking"];
const user = {
  name: "max",
  age: 32,
};

const newHobbies = ["reading"];

const mergedHobbies = [...hobbies, ...newHobbies]; // spread operator ... pull value from array to create new array

console.log(mergedHobbies);

//spread operator between object
const extendedUser = {
  isADmin: true,
  ...user,
};

console.log(extendedUser);
