import { numberCellStatus } from "../constants/numberCellStatus";
import { grid, gridSize, numberSize } from "./generate.js";

export const check = (setBoard) => {
  checkRows();
  checkColumns();

  let numberOfCorrectSums = 0;
  for (let gridItem of grid) {
    if (gridItem.correct) {
      numberOfCorrectSums += 1;
    }
  }

  if (numberOfCorrectSums === numberSize * 2) {
    console.log("RIŠIA");

    setBoard((prev) => {
      const prevGrid = [...prev];

      for (let gridItem of prevGrid) {
        if (!(gridItem.status === numberCellStatus.crossed)) {
          gridItem.status = numberCellStatus.circled;
        }
      }
      return prevGrid;
    });
  }

  setBoard((prev) => {
    const prevCopy = [...prev];
    return prevCopy;
  });
};

const checkRows = () => {
  for (let i = 0; i < numberSize; i++) {
    let sum = 0;
    for (let j = 0; j < numberSize; j++) {
      let index = i * 4 + j;
      let cell = grid[index];
      if (!(cell.status === numberCellStatus.crossed)) {
        sum += cell.content;
      }
    }
    let index = i * gridSize + numberSize;
    let cell = grid[index];
    if (sum === cell.content) {
      cell.correct = true;
    } else {
      cell.correct = false;
    }
  }
};

const checkColumns = () => {
  for (let j = 0; j < numberSize; j++) {
    let sum = 0;
    for (let i = 0; i < numberSize; i++) {
      let index = i * gridSize + j;
      let cell = grid[index];
      if (!(cell.status === numberCellStatus.crossed)) {
        sum += cell.content;
      }
    }
    let index = numberSize * gridSize + j;
    let cell = grid[index];
    if (sum === cell.content) {
      cell.correct = true;
    } else {
      cell.correct = false;
    }
  }
};
