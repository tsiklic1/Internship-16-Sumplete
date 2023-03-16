export const generateNumbers = () => {
  const numbersList = [];
  for (let i = 0; i < 9; i++) {
    numbersList.push({
      index: i,
      number: Math.floor(Math.random() * 9),
    });
  }

  console.log(numbersList);

  return numbersList;
};

export const generateSum = (numbers) => {
  const countOfNumbers = Math.floor(Math.random() * 3) + 1;
  const selectedNumbers = [];
  for (let i = 0; i < countOfNumbers; i++) {
    const randomNumber = numbers[Math.floor(Math.random() * 3)];
    if (!selectedNumbers.includes(randomNumber)) {
      selectedNumbers.push(randomNumber);
    }
  }

  console.log(selectedNumbers);

  const sum = selectedNumbers.reduce((a, b) => a + b, 0);
  console.log("sum", sum);
};

export const generateRow = () => {
  const row = [];
};

generateSum([5, 6, 7]);
