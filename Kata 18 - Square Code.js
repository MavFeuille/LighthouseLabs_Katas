const squareCode = (message) => {
  let output = "";
  
  // Remove spaces from original message
  message = message.replace(/\s/g, "");

  // Find out number of columes through the length of message
  let columns = Math.ceil(Math.sqrt(message.length));

  for (let i = 0; i < columns; i++) {
    for(let j = i; j < message.length; j += columns) {
      output += message[j];
      console.log("🚀 ~ file: Kata 18 - Square Code.js ~ line 13 ~ squareCode ~ output", output)
    }
  }
};

console.log(squareCode("chill out"));