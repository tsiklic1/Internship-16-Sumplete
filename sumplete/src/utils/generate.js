import { numberCellStatus } from "../constants/numberCellStatus";

export const grid = Array.from(Array(15).fill(), (x, i) => {
  return {
    id: i + 1,
  };
});

export const gridSize = 4;
export const numberSize = gridSize - 1;

export const generate = () => {
  for (let i = 0; i < numberSize; i++) {
    for (let j = 0; j < numberSize; j++) {
      let randomNumber = Math.floor(Math.random() * 9) + 1;
      let index = i * 4 + j;
      let cell = grid[index];
      cell.content = randomNumber;
      cell.classList = "number";
      cell.status = numberCellStatus.empty;
      if (Math.random() < 0.5) {
        cell.isCorrect = true;
      }
      grid[index] = cell;
    }
  }

  for (let i = 0; i < numberSize; i++) {
    let sum = 0;
    for (let j = 0; j < numberSize; j++) {
      let index = i * gridSize + j;
      let cell = grid[index];
      if (cell.isCorrect) {
        sum += cell.content;
      }
    }
    let index = i * gridSize + numberSize;
    let cell = grid[index];
    cell.content = sum;
    cell.classList = "hanswer";
    cell.correct = false;
  }

  for (let j = 0; j < numberSize; j++) {
    let sum = 0;
    for (let i = 0; i < numberSize; i++) {
      let index = i * gridSize + j;
      let cell = grid[index];
      if (cell.isCorrect) {
        sum += cell.content;
      }
    }
    let index = numberSize * gridSize + j;
    let cell = grid[index];
    cell.content = sum;
    cell.classList = "vanswer";
    cell.correct = false;
  }
};
