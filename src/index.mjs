import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello JavaScript!</h1>
// `;

//IF Statement
const password = prompt("your Password");

if (password === "Hello") {
  console.log("Hello works");
} else if (password === "hello") {
  console.log("hello works");
} else {
  console.log("access not Granted");
}

//LOOP
const hobbies = ["Sports", "Cooking", "reading"];

for (const hobby of hobbies) {
  console.log(hobby);
}
