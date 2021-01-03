import {
  greeting,
  getAnswer,
  getRandomNumber,
  checkAnswer,
} from '../src/index.js';

export default () => {
  const name = greeting();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const number = getRandomNumber(100);
    const rightAnswer = number % 2 ? 'no' : 'yes';
    console.log(`Question: ${number}`);
    const userAnswer = getAnswer();
    if (!checkAnswer([rightAnswer, userAnswer], name)) {
      return;
    }
  }
  console.log(`Congratulations, ${name}!`);
};
