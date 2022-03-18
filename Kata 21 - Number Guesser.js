const prompt = require('prompt-sync')({
  sigint: true, // Sigint set to be true to exit by ^C
});

// Generate random number
const maxNum = 50;
const secretNumber = (Math.ceil(Math.random() * maxNum));
console.log("secretNumber = ",secretNumber)


const guessNumber = (secretNumber) => {
  // let attempts = countAttempts(guessArray);
  let guess;
  let guessArray = [];
 
  // Prompt user to guess a number
  // Run through to check if guess === secretNumber
  // if guess !== secretNumber, increase count of attempt
  // Prompt user to guess again
  do {
    guess = Number(prompt("Guess a number: "));
    guessArray.push(guess);
    console.log("guessArray at Line21 : ", guessArray);

    

    if (!hasDuplicate(guessArray)) {
      console.log("🚀 ~ file: Kata 21 - Number Guesser.js ~ line 38 ~ guessNumber ~ hasDuplicate", hasDuplicate(guessArray));
      console.log("Already guessed!");
    }
    if (guess < secretNumber) {
      console.log("Too low! at line 30");
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
// console.log("🚀 ~ file: Kata 21 - Number Guesser.js ~ line 34 ~ hasDuplicate ~ hasDuplicate", hasDuplicate(guessArray))

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
// console.log("🚀 ~ file: Kata 21 - Number Guesser.js ~ line 35 ~ countAttempts ~ countAttempts", countAttempts(guessArray))

guessNumber(secretNumber);
