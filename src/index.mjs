import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello JavaScript!</h1>
// `;

//array destruc normally
const userNameData = ["Max", "Test"];

const firstName = userNameData[0];
const lastName = userNameData[1];

console.log("destruc normal firstName" + firstName);
console.log("destruc normal lastName" + lastName);
//array destruc more simple

const [first, last] = ["ajo", "bajo"];
console.log("destruc simple " + first);
console.log("destruc simple " + last);

//destruc object normally
const user = {
  name: "Max",
  age: 34,
};
const name = user.name;
const age = user.age;

//destruc object simple
const { nama: userName, umur } = {
  nama: "tes",
  umur: 34,
};

console.log(userName + " " + umur);
