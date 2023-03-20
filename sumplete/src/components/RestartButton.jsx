import { numberCellStatus } from "../constants/numberCellStatus";
import { check } from "../utils/check";
import { grid } from "../utils/generate";

const RestartButton = ({ setBoard }) => {
  const handleClick = () => {
    for (let gridItem of grid) {
      if (gridItem.status) {
        gridItem.status = numberCellStatus.empty;
      }
    }
    check(setBoard);
  };
  return (
    <button className="function-button" onClick={() => handleClick()}>
      Restart
    </button>
  );
};

export default RestartButton;
