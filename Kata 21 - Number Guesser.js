const prompt = require('prompt-sync')();

// Generate random number
const maxNum = 50;
const randomNumber = (Math.ceil(Math.random() * maxNum));
console.log("randomNumber = ",randomNumber)

const guessNumber = (randomNumber) => {
  let attempt = 0;
  let input = prompt("Guess a number: ");
  if (prompt < randomNumber) {
    console.log("You answerd: " + input);
    console.log("Tow low!");
  } else if (prompt > randomNumber) {
    console.log("You answerd: " + input);
    console.log("Tow high!");
  }
}

guessNumber(randomNumber);
