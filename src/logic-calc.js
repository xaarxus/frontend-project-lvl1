import {
  greeting,
  getAnswer,
  getRandomNumber,
  checkAnswer,
  randomOperation,
} from './index.js';

export default () => {
  const name = greeting();

  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    const number1 = getRandomNumber();
    const number2 = getRandomNumber();
    const rightAnswer = randomOperation(number1, number2);
    const userAnswer = getAnswer();
    if (!checkAnswer([rightAnswer, userAnswer], name)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
