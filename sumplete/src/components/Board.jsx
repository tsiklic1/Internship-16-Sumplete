import NumberCell from "./NumberCell";
import SumCell from "./SumCell";
import { useState } from "react";
import { grid } from "../utils/generate";
import clsx from "clsx";
import { check } from "../utils/check";

const Board = () => {
  const [board, setBoard] = useState(grid);
  check();
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
          <SumCell key={gridItem.id} number={gridItem.content} />
        )
      )}

      <pre>{JSON.stringify(board, null, 2)}</pre>
    </div>
  );
};

export default Board;
