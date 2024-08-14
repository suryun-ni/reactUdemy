import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello JavaScript!</h1>
// `;

//function inside other function

function init() {
  //example greet inside init
  function greet() {
    console.log("Hi!");
  }
  //now greet can only be run inside init
  greet();
}
// greet(); this show error becuase greet outside init
init();
