const camelCase = (input) => {
  let output = "";

  for (let i = 0; i < input.length; i++) {
    if (input[i] !== " ") {
      output += input[i];
    } else {
      let capLetter = input[i + 1].toUpperCase();
      output += capLetter;
      i++;  //when it loop to space, it will return undefined and increment to the next character
    }
  }
  return output;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));