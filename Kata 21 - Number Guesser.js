const prompt = require('prompt-sync')({
  sigint: true, // Sigint set to be true to exit by ^C
});

// Generate random number
const maxNum = 50;
const secretNumber = (Math.ceil(Math.random() * maxNum));
console.log("secretNumber = ",secretNumber)

const guessNumber = (secretNumber) => {
  let attempt = 0;
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

    //Helper function to check if guess already existed in guessArray (duplicates)
    const hasDuplicate = guessArray.every((guess) => {
      guessArray.indexOf(guess) === guessArray.lastIndexOf(guess);
      // console.log("🚀 ~ file: Kata 21 - Number Guesser.js ~ line 27 ~ hasDuplicate ~ guessArray.indexOf(guess)", guessArray.indexOf(guess));
      // console.log("🚀 ~ file: Kata 21 - Number Guesser.js ~ line 28 ~ hasDuplicate ~ guessArray.lastIndexOf(guess)", guessArray.lastIndexOf(guess));
    })
    console.log("🚀 ~ file: Kata 21 - Number Guesser.js ~ line 30 ~ hasDuplicate ~ hasDuplicate", hasDuplicate)

    // if (!hasDuplicate) {
    //   console.log("Already guessed!");
    // } else {
    //   attempt ++;
    //   if (guess < secretNumber) {
    //     console.log("Too low! at line 30");
    //   }
    //   if (guess > secretNumber) {
    //     console.log("Too high!")
    //   }
    //   if (isNaN(guess)) {
    //     console.log("Not a number, Try again!")
    //   }
    //   if (guess === secretNumber) {
    //     console.log(`You got it! You took ${attempt} attempts!`);
    //   } 
    // }    
  } while (guess !== secretNumber);
}



guessNumber(secretNumber);
