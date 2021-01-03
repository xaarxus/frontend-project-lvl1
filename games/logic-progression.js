import {
  greeting,
  getAnswer,
  getRandomNumber,
  checkAnswer,
} from '../src/index.js';

const createOrderOfNumbers = (factor) => {
  const randomIndex = getRandomNumber(9);
  const startNumber = getRandomNumber(10);
  const arr = new Array(10).fill(startNumber);
  let rightAnswer;
  const numbers = arr.map((num, i) => {
    if (i === randomIndex) {
      rightAnswer = String(num + (factor * i));
      return '..';
    }
    return String(num + (factor * i));
  });
  return { numbers, rightAnswer };
};

export default () => {
  const name = greeting();

  console.log('What number is missing in the progression?');
  for (let i = 0; i < 3; i += 1) {
    const { numbers, rightAnswer } = createOrderOfNumbers(getRandomNumber(10));
    console.log(`Question: ${numbers.join(' ')}`);
    const userAnswer = getAnswer();
    if (!checkAnswer([rightAnswer, userAnswer], name)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
