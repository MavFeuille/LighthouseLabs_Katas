const prompt = require('prompt-sync')({
  sigint: true,
  history: require('prompt-sync-history')()
});

// Generate random number
const maxNum = 50;
const secretNumber = (Math.ceil(Math.random() * maxNum));
console.log("secretNumber = ",secretNumber)

const guessNumber = (secretNumber) => {
  let attempt = 0;
  let guess;
  
  // Prompt user to guess a number
  // Run through to check if guess === secretNumber
  // if guess !== secretNumber, increase count of attempt
  // Prompt user to guess again
  do {
    guess = Number(prompt("Guess a number: "));
    prompt.history.save();
    console.log("prompt.history at Line21: ", prompt.history.save());
    attempt ++;
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
      console.log(`You got it! You took ${attempt} attempts!`);
    }
  } while (guess !== secretNumber);
}

guessNumber(secretNumber);
