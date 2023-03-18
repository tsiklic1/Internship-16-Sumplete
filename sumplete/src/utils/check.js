import { numberCellStatus } from "../constants/numberCellStatus";
import { grid, gridSize, numberSize } from "./generate.js";

export const check = () => {
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
    console.log(sum);
    if (sum === cell.content) {
      cell.correct = true;
    } else {
      cell.correct = false;
    }
  }
};

check();
