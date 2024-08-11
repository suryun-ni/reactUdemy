import "./styles.css";

// document.getElementById("app").innerHTML = `
// <h1>Hello JavaScript!</h1>
// `;

function tranformToObjects(input) {
  const tes = input.map((item) => ({ val: item }));
  console.log(tes);
  return tes;
}

tranformToObjects([1, 2, 3, 4, 5]);
