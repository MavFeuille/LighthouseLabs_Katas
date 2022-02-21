const squareCode = (message) => {
  let output = "";
  
  // Remove spaces from original message
  message = message.replace(/\s/g, "");

  // Find out number of columes through the length of message
  let columns = Math.ceil(Math.sqrt(message.length));

  // Perform for loop whenever i < 3 (columns)
  for (let i = 0; i < columns; i++) {
    // Print each character in message according to each column
    for (let j = i; j < message.length; j += columns) {
      output += message[j];
    }
    // Add space after output if it reaches the last index of each row (the last column)
    if (i < columns - 1) {
      output += " ";
    }
  }
  return output;
};

console.log(squareCode("chill out"));
console.log(squareCode("feed the dog"));
console.log(squareCode("have a nice day"));
console.log(squareCode("if man was meant to stay on the ground god would have given us roots"));
