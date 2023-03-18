import Board from "./components/Board";
import { useState } from "react";
import { grid } from "./utils/generate";
import "./index.css";

function App() {
  const [board, setBoard] = useState(grid);

  return (
    <div className="App">
      <div>
        <h1>Sumplete</h1>
        <h2>
          Delete numbers so each row/column adds up to the target number at the
          right/bottom.
        </h2>
        <Board board={board} setBoard={setBoard} />
      </div>
    </div>
  );
}

export default App;
