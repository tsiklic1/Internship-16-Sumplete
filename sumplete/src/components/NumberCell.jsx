import { numberCellStatus } from "../constants/numberCellStatus";

const NumberCell = ({ number, setBoard, gridItemId }) => {
  const handleClick = () => {
    console.log("clicked");
    setBoard((prev) => {
      console.log("set");
      const prevGrid = [...prev];
      for (let gridItem of prevGrid) {
        if (gridItem.id === gridItemId) {
          console.log(gridItem);
          if (gridItem.status === numberCellStatus.empty) {
            gridItem.status = numberCellStatus.crossed;
          } else if (gridItem.status === numberCellStatus.crossed) {
            gridItem.status = numberCellStatus.circled;
          } else if (gridItem.status === numberCellStatus.circled) {
            gridItem.status = numberCellStatus.empty;
          }
        }
      }
      return prevGrid;
    });
  };

  return (
    <div
      className="cell number"
      onClick={() => {
        handleClick();
      }}
    >
      {number}
    </div>
  );
};

export default NumberCell;
