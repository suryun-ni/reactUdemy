function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        Fundamental React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}
function App() {
  return (
    <div>
      <Header></Header> {/**/}
      <main>
        <h2>Creating & using a First Custom Componenet</h2>
        <ol>
          <li>
            Komponen merupakan kode JS yang terdiri dari fungsi dan berisi
            render HTML{" "}
          </li>
          <li>Fungsi pada Komponen dibuat dengan huruf besar</li>
          <li>
            Untuk menambah Fungsi "Render" ke dalam App React, bisa menggunakan{" "}
            (Header)(/Header) atau (Header /)
          </li>
        </ol>
      </main>
    </div>
  );
}

export default App;
