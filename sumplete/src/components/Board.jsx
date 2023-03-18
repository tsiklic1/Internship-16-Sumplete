import NumberCell from "./NumberCell";
import SumCell from "./SumCell";
import { useState } from "react";
import { grid, generate } from "../utils/generate";
import { check } from "../utils/check";
import { useEffect } from "react";

generate();

const Board = () => {
  const [board, setBoard] = useState(grid);

  useEffect(() => {
    console.log("useeff");
    check(setBoard);
  }, []);

  return (
    <div className="board">
      {grid.map((gridItem) =>
        gridItem.classList === "number" ? (
          <NumberCell
            key={gridItem.id}
            gridItemId={gridItem.id}
            number={gridItem.content}
            board={board}
            setBoard={setBoard}
          />
        ) : (
          <SumCell
            key={gridItem.id}
            number={gridItem.content}
            isCorrect={gridItem.correct}
          />
        )
      )}

      <pre>{JSON.stringify(board, null, 2)}</pre>
    </div>
  );
};

export default Board;
