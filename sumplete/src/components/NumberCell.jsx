import { numberCellStatus } from "../constants/numberCellStatus";
import clsx from "clsx";
import { check } from "../utils/check";

const NumberCell = ({ number, board, setBoard, gridItemId }) => {
  const handleClick = () => {
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
      className={`cell number ${clsx({
        empty:
          board.find((cell) => cell.id === gridItemId).status ===
          numberCellStatus.empty,
        crossed:
          board.find((cell) => cell.id === gridItemId).status ===
          numberCellStatus.crossed,
        circled:
          board.find((cell) => cell.id === gridItemId).status ===
          numberCellStatus.circled,
      })}`}
      onClick={() => {
        handleClick();
      }}
    >
      {number}
    </div>
  );
};

export default NumberCell;
