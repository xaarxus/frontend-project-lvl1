import {
  greeting,
  getAnswer,
  getRandomNumber,
  checkAnswer,
} from '../src/index.js';

const findRigthAnswer = (num1, num2) => {
  let minNumber = Math.min(num2, num1);
  for (minNumber; minNumber > 0; minNumber -= 1) {
    if ((num2 % minNumber === 0) && (num1 % minNumber === 0)) {
      return minNumber;
    }
  }
  return minNumber;
};

export default () => {
  const name = greeting();

  console.log('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomNumber(100);
    const number2 = getRandomNumber(100);
    console.log(`Question: ${number1} ${number2}`);
    const userAnswer = getAnswer();
    const rightAnswer = findRigthAnswer(number1, number2);
    if (!checkAnswer([rightAnswer, userAnswer], name)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
