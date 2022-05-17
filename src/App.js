import "./App.css";

import logo from "./logo.svg";

function App() {
  document.addEventListener("message", (msg) => {
    console.log("Received msg!", msg);
  });

  window.addEventListener("keydown", () => {
    console.log("Key pressed!");
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
