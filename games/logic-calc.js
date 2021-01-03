import {
  greeting,
  getAnswer,
  getRandomNumber,
  checkAnswer,
} from '../src/index.js';

const randomOperation = (num1, num2) => {
  const randomIndex = Math.floor(Math.random() * 3);
  const operator = ['+', '-', '*'][randomIndex];
  console.log(`Question: ${num1} ${operator} ${num2}`);
  if (operator === '+') {
    return num1 + num2;
  }
  if (operator === '-') {
    return num1 - num2;
  }
  return num1 * num2;
};

export default () => {
  const name = greeting();

  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomNumber(100);
    const number2 = getRandomNumber(100);
    const rightAnswer = randomOperation(number1, number2);
    const userAnswer = getAnswer();
    if (!checkAnswer([rightAnswer, userAnswer], name)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
