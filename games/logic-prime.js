import {
  greeting,
  getAnswer,
  getRandomNumber,
  checkAnswer,
} from '../src/index.js';

const isPrime = (num) => {
  let result = true;
  for (let i = (num - 1); i > 1; i -= 1) {
    if ((num % i) === 0) {
      result = false;
    }
  }
  return result;
};

export default () => {
  const name = greeting();

  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(100);
    console.log(`Question: ${number}`);
    const userAnswer = getAnswer();
    const rightAnswer = isPrime(number) ? 'yes' : 'no';
    if (!checkAnswer([rightAnswer, userAnswer], name)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
