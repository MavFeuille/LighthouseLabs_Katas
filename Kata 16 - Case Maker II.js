/*
Precedence of each of the casing styles are as follows, values higher in the list should be processed first:
1. camel, pascal, snake, kebab, title
2. vowel, consonant
3. upper, lower 
*/

const makeCase = (input, cases) => {
  let output = "";
  const inputSplit = input.split("");
  
}

console.log(makeCase("this is a string", "camel"));