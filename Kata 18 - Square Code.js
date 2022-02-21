const squareCode = (message) => {
  let output = "";
  
  // Remove spaces from original message
  message = message.replace(/\s/g, "");

  // Find out number of columes through the length of message, formula was given in Kata18
  let columns = Math.ceil(Math.sqrt(message.length));

  // Perform for loop whenever i < 3 (columns)
  for (let i = 0; i < columns; i++) {
    /* Print each character in message according to each column.
       Increment by the number of columns in order to print all characters under each column.
    */
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
