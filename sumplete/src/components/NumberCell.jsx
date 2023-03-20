import { numberCellStatus } from "../constants/numberCellStatus";
import { check } from "../utils/check";
import { numberSize } from "../utils/generate";

const NumberCell = ({
  number,
  board,
  setBoard,
  gridItemId,
  countCorrectSums,
}) => {
  const handleClick = () => {
    if (countCorrectSums() === numberSize * 2) {
      return;
    }

    setBoard((prev) => {
      const prevGrid = [...prev];
      for (let gridItem of prevGrid) {
        if (gridItem.id === gridItemId) {
          if (gridItem.status === numberCellStatus.empty) {
            gridItem.status = numberCellStatus.crossed;
          } else if (gridItem.status === numberCellStatus.crossed) {
            gridItem.status = numberCellStatus.circled;
          } else if (gridItem.status === numberCellStatus.circled) {
            gridItem.status = numberCellStatus.empty;
          }
        }
      }
      check(setBoard);
      return prevGrid;
    });
  };

  return (
    <div
      className={`cell number`}
      onClick={() => {
        handleClick();
      }}
    >
      {number}

      {board.find((cell) => cell.id === gridItemId).status ===
        numberCellStatus.crossed && (
        <div className="red-cross-img">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ff0000"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </div>
      )}

      {board.find((cell) => cell.id === gridItemId).status ===
        numberCellStatus.circled && <div className="green-circle"></div>}
    </div>
  );
};

export default NumberCell;
