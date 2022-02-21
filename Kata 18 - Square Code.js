const squareCode = (message) => {
  let output = "";
  
  // Remove spaces from original message
  message = message.replace(/\s/g, "");

  // Find out number of columes through the length of message
  let columns = Math.ceil(Math.sqrt(message.length));
  console.log("🚀 ~ file: Kata 18 - Square Code.js ~ line 9 ~ squareCode ~ columns", columns)

  // Perform for loop whenever i < 3 (columns)
  for (let i = 0; i < columns; i++) {
    // console.log("Message in i-loop: ", message);
    console.log("columns[i] :", i);
    for (let j = i; j < message.length; j += columns) {
      console.log("message[j] :", message[j]);
    }
  }
};

console.log(squareCode("chill out"));