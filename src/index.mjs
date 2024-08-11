import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello JavaScript!</h1>
// `;

//Arrow Function
//bisa buat anonymus function dengan cara ini :

export default function (userName, message) {
  console.log("anonymus function default");
  return userName + message;
}

//arrow function
(userName, message) => {
  console.log("arrow function");
  return userName + message;
};
