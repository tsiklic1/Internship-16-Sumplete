import clsx from "clsx";

const SumCell = ({ number, isCorrect }) => {
  return (
    <div className={`cell answer ${clsx({ correct: isCorrect })}`}>
      {number}
    </div>
  );
};

export default SumCell;
