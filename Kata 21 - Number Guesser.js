const prompt = require('prompt-sync')();

// Generate random number
const maxNum = 50;
const randomNumber = (Math.ceil(Math.random() * maxNum));
console.log("randomNumber = ",randomNumber)

const guessNumber = (randomNumber) => {
  let attempt = 0;
  let guess = prompt("Guess a number: ");

  
}

guessNumber(randomNumber);
