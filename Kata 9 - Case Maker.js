const camelCase = function(input) {
  let finalText = "";
  for (let i = 0 ; i < input.length; i++) {
    if (input[i] !== " ") {
      finalText += input[i];
    } else {
      let capLetter = input[i+1].toUpperCase();
      finalText += capLetter;
      i++;
    }
  }
  return finalText;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));