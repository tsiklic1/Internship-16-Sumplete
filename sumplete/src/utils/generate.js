export const grid = Array.from(Array(15).fill(), (x, i) => {
  return {
    id: i + 1,
  };
});

const gridSize = 4;
const numberSize = gridSize - 1;

const generate = () => {
  for (let i = 0; i < numberSize; i++) {
    for (let j = 0; j < numberSize; j++) {
      let randomNumber = Math.floor(Math.random() * 9) + 1;
      let index = i * 4 + j;
      let cell = grid[index];
      cell.content = randomNumber;
      cell.classList = "number";
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
  }
  console.log(grid);
};

// const check = () => {
//   for (let i = 0; i < numberSize; i++){
//     let sum = 0;
//     for (let j = 0; j < numberSize; j++){
//       let index = i * gridSize + j
//       let cell = grid[index]
//     }
//   }
// }

generate();