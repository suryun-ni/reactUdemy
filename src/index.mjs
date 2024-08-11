import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello JavaScript!</h1>
// `;

//Object : store key value
//array store value only

const hobbies = ["Sports", "Cooking", "Reading"];

console.log(hobbies[1]);
hobbies.push("working");
console.log(hobbies);

//findIndex , mencari item value bahkan yang baru dipush, mengembalikan true
const index = hobbies.findIndex((item) => {
  return item === "working";
});
//or write it like this
const indexShort = hobbies.findIndex((item) => item === "Sports");

console.log(index);
console.log(indexShort);

//Map function, transform item in array to other to another item
//, mengembalikan array baru tanpa mengubah array aslinya

const mapA = hobbies.map((item) => item + "!");
console.log(mapA);

//Map, ubah ke objek
const mapB = hobbies.map((item) => ({ item: item }));
console.log(mapB);
