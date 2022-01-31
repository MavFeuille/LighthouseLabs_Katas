const camelCase = (input) => {
  let output = input.replace(/(?:^\w|\[A-Z\]|\b\w)/g, (character, index) => {
    return index === 0 ? character.toLowerCase() : character.toUpperCase();
  }).replace(/\s+/g, '');

  return output;
}

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));