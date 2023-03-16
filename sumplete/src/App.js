import Board from "./Board";
import { generateNumbers } from "./generate";
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
        <Board numbersList={generateNumbers()} />
      </div>
    </div>
  );
}

export default App;
