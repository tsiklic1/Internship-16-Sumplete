import Board from "./components/Board";

import "./index.css";

function App() {
  return (
    <div className="App">
      <div>
        <h1>Sumplete</h1>
        <h2>
          Delete numbers so each row/column adds up to the target number at the
          right/bottom.
        </h2>
        <Board />
      </div>
    </div>
  );
}

export default App;
