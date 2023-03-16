export const generateNumbers = () => {
  const numbersList = [];
  for (let i = 0; i < 9; i++) {
    numbersList.push({
      id: i,
      number: Math.floor(Math.random() * 9) + 1,
      isCorrect: Math.random() < 0.5 ? true : false,
    });
  }
  return numbersList;
};

export const generateSum = (numbers) => {
  const countOfNumbers = Math.floor(Math.random() * 4);
  const selectedNumbers = [];

  for (let i = 0; i < countOfNumbers; i++) {
    const randomNumber = numbers[Math.floor(Math.random() * 3)];
    if (!selectedNumbers.includes(randomNumber)) {
      selectedNumbers.push(randomNumber);
    }
  }
  const sum = selectedNumbers.reduce((a, b) => a + b, 0);
  return sum;
};

export const numberObjects = generateNumbers();
const numbers = numberObjects.map((numberObject) => numberObject.number);

export const rowSums = [];
rowSums.push(generateSum(numbers.slice(0, 3)));
rowSums.push(generateSum(numbers.slice(3, 6)));
rowSums.push(generateSum(numbers.slice(6, 9)));

export const columnSums = [];

for (let i = 0; i < 3; i++) {
  const tempNumberObjectsArr = numberObjects.filter(
    (numberObject) => numberObject.id % 3 === i
  );

  const tempNumbersArr = tempNumberObjectsArr.map(
    (numberObject) => numberObject.number
  );

  columnSums.push(generateSum(tempNumbersArr));
}

console.log("numbers", numberObjects);
console.log("rowsums", rowSums);
console.log("columnSums", columnSums);
