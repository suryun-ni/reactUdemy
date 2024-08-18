const reactDescriptions = ['1. pada React gunakan kurawal pada html untuk memanggil value pada variabel', 
  '2. JSX itu tidak dirender pada browser, melainkan ia akan dibuat sebagai tree yang lalu di sesuaikan oleh react posisinya sebelum di render ke DOM',
  '3. Fungsi itu harus menggunakan huruf besar agar si react bisa membedakan antara built-in components dan custom components ',
'4. pada index.jsx, terdapat import ReactDOM yang berfungsi untuk merender App.jsx. '
,'5. App.jsx yang di render akan di teruskan ke index.html. oleh karena itu pada inspect browser akan ada header dan main didalam div root'];

function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescriptions[genRandomInt(4)];
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>DynamicValues, memanfaatkan kreatifitas untuk menampilkan random text</p>
      <p>
        {description}
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
    </div>
  );
}

export default App;
