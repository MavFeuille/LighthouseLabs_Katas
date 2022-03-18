const prompt = require('prompt-sync')({
  sigint: true, // Sigint set to be true to exit by ^C
});

// Generate random number
const maxNum = 50;
const secretNumber = (Math.ceil(Math.random() * maxNum));

const guessNumber = (secretNumber) => {
  let guess;
  let guessArray = [];
 
  do {
    guess = Number(prompt("Guess a number: "));
    guessArray.push(guess);

    if (!hasDuplicate(guessArray)) {
      console.log("Already guessed!");
    }
    if (guess < secretNumber) {
      console.log("Too low!");
    }
    if (guess > secretNumber) {
      console.log("Too high!")
    }
    if (isNaN(guess)) {
      console.log("Not a number, Try again!")
    }
    if (guess === secretNumber) {
      console.log(`You got it! You took ${countAttempts(guessArray)} attempts!`);
    } 
  } while (guess !== secretNumber);
}

//Helper function to check if guess already existed in guessArray (duplicates)
const hasDuplicate = (array) => {
  array.sort();
  for (let i = 0; i < array.length; i++) {
    if (array[i - 1] === array[i]) {
      return false;
    }
  }
  return true;
}

//Helper function to count attempts of guessing a number
const countAttempts = (array) => {
  let attempt = 0;
  array.sort();
  for (let i = 0; i < array.length; i++) {
    if (array[i - 1] !== array[i]) {
      attempt++;
    }
  }
  return attempt;
}

guessNumber(secretNumber);
