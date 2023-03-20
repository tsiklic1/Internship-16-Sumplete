import { generate } from "../utils/generate";
import { grid } from "../utils/generate";
import { check } from "../utils/check";

const NewGame = ({ setBoard }) => {
  const handleClick = () => {
    console.log("clicked new game");
    generate();
    console.log(grid);
    check(setBoard);
  };

  return (
    <button className="function-button" onClick={() => handleClick()}>
      New puzzle
    </button>
  );
};

export default NewGame;
