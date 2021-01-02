import readlineSync from 'readline-sync';

const getAnswer = () => {
  const answer = readlineSync.question('Your answer: ');
  return answer;
};

const getRandomNumber = () => {
  const number = Math.ceil(Math.random() * 100);
  return number;
};

const checkAnswer = (answers, name) => {
  const [rightAnswer, userAnswer] = answers;
  if (String(rightAnswer) !== userAnswer) {
    console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${rightAnswer}'.`);
    console.log(`Let's try again, ${name}!`);
    return false;
  }
  console.log('Correct!');
  return true;
};

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

const greeting = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export {
  greeting,
  getAnswer,
  getRandomNumber,
  checkAnswer,
  randomOperation,
};
