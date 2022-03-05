const prompt = require('prompt-sync')();

// Generate random number
const maxNum = 50;
const randomNumber = (Math.ceil(Math.random() * maxNum));
console.log("randomNumber = ",randomNumber)

const guessNumber = (randomNumber) => {
  let attempt = 0;
  let input = Number(prompt("Guess a number: "));
  
  if (input < randomNumber) {
    console.log("You answerd: " + input);
    console.log("Tow low!");
    attempt += 1;
  } else if (input > randomNumber) {
    console.log("You answerd: " + input);
    console.log("Tow high!");
    attempt += 1;
  } else if (typeof input !== Number) {
    console.log("You answerd: " + input);
    console.log("Not a number, try again!")
  } else if (input == randomNumber) {
    attempt += 1;
    console.log("You answerd: " + input);
    console.log(`You got it! You took ${attempt} attempts!`);
  }
}

guessNumber(randomNumber);
