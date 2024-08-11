import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello JavaScript!</h1>
// `;

// umummnya
const userName = "Max";
const age = 34;

//better as object

const user = {
  name: "Max",
  age: 34,
};

console.log(user);
console.log(user.name);

//objek bisa juga untuk menyimpan function :
const userFunc = {
  name: "Max",
  age: 34,
  greet() {
    console.log("Hello!");
    console.log(this.age); // memanggil properties di objek
  },
};

userFunc.greet();

//make a blueprint using class
class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log("HI!");
  }
}
const user1 = new User("classUser", 32);
console.log(user1);
user1.greet();
