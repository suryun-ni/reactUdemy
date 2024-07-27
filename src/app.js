function createGreeting(userName, message = "Anjing") {
  // default value "anjing"
  if (userName == "Tengku") {
    // console.log("hallo " + userName + " " + "Selamat Datang");
    return "hallo " + userName + " " + "Selamat Datang";
  } else {
    // console.log("hallo " + userName + " " + message);
    return "hallo " + userName + " " + message;
  }
}

createGreeting("adi");
//after using return
const greeting1 = createGreeting("adi");
console.log(greeting1);
