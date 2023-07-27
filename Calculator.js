const calculator = (num1, sign, num2) => {
  if (sign === "+") {
    return num1 + num2;
  } else if (sign === "-") {
    return num1 - num2;
  } else if (sign === "*") {
    return num1 * num2;
  } else if (sign === "/") {
    return num1 / num2;
  }
};

const num1 = 5
const sign = "+";
const num2 = 6

console.log(calculator(num1, sign, num2))
