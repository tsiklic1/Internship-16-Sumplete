import NumberCell from "./NumberCell";
import SumCell from "./SumCell";
import { useState } from "react";
import { grid, generate, numberSize } from "../utils/generate";
import { check } from "../utils/check";
import { useEffect } from "react";
import { WinMessage } from "./WinMessage";

generate();

const Board = ({ board, setBoard }) => {
  useEffect(() => {
    console.log("useeff");
    check(setBoard);
  }, []);

  const countCorrectSums = () => {
    let numberOfCorrectSums = 0;
    for (let cell of board) {
      if (cell.correct) {
        numberOfCorrectSums++;
      }
    }
    return numberOfCorrectSums;
  };

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
      <div>{countCorrectSums() === numberSize * 2 && <WinMessage />}</div>
    </div>
  );
};

export default Board;
