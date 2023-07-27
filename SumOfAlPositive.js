const sumNumberPositive = (numbers) => {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > i) {
      sum += numbers[i];
    }
  }
  return sum;
};

const numbers = [7, -9, 8];
console.log(sumNumberPositive(numbers));
