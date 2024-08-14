import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello JavaScript!</h1>
// `;

//function use as values in other function

function handleTimeout() {
  console.log("time Out!");
}

const handleTimeout2 = () => {
  console.log("TImed out.... again!");
};

setTimeout(handleTimeout, 2000);
setTimeout(handleTimeout2, 3000);
setTimeout(() => {
  console.log("More timing out.....");
}, 5000);

//selain fungsi bawaan, juga bisa pakai fungsi dari sendiri
function greeter(greetFn) {
  greetFn();
}

greeter(() => {
  console.log("HI");
});
