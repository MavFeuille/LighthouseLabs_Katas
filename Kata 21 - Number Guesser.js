const prompt = require('prompt-sync')();

// Generate random number
const maxNum = 50;
const secretNumber = (Math.ceil(Math.random() * maxNum));
console.log("secretNumber = ",secretNumber)

const guessNumber = (secretNumber) => {
  let attempt = 0;
  let guess = Number(prompt("Guess a number: "));

  
}

guessNumber(secretNumber);
