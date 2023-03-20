import NumberCell from "./NumberCell";
import SumCell from "./SumCell";
import { useRef } from "react";
import { grid, generate, numberSize } from "../utils/generate";
import { check } from "../utils/check";
import { useEffect } from "react";
import { WinMessage } from "./WinMessage";
import NewGame from "./NewGame";
import RestartButton from "./RestartButton";
generate();

const Board = ({ board, setBoard }) => {
  const regenerated = useRef(false);
  useEffect(() => {
    check(setBoard);
  }, [setBoard]);

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
            countCorrectSums={countCorrectSums}
          />
        ) : (
          <SumCell
            key={gridItem.id}
            number={gridItem.content}
            isCorrect={gridItem.correct}
          />
        )
      )}
      <div>
        {countCorrectSums() === numberSize * 2 ? (
          <div className="win-content-container">
            {" "}
            <WinMessage />{" "}
            <NewGame setBoard={setBoard} regenerated={regenerated} />
          </div>
        ) : (
          <RestartButton setBoard={setBoard} />
        )}
      </div>
    </div>
  );
};

export default Board;
