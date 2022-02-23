// Instruction: Count the number of vowels that appear in a given string.
const numberOfVowels = (data) => {
  let count = 0;

  for (let letter of data) {
    if (letter === "a" || letter === "e" || letter === "i" || letter === "o" || letter === "u") {
      count += 1;
    }
  }
  return count;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));