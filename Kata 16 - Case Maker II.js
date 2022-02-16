/*
Precedence of each of the casing styles are as follows, values higher in the list should be processed first:
1. camel, pascal, snake, kebab, title
2. vowel, consonant
3. upper, lower
*/

const makeCase = (input, cases) => {
  let output = "";
  
  if (cases === "camel") {
    const inputSplit = input.split("");
    for (let i = 0; i < inputSplit.length; i++) {
      if (inputSplit[i - 1] === " ") {
        inputSplit[i] = inputSplit[i].toUpperCase();
      }
      // console.log(inputSplit[i]);
    }
    output = inputSplit.join("").replace(/\s+/g, "");
  }
  
  if (cases === "pascal") {
    const newInput = input.charAt(0).toUpperCase() + input.slice(1);
    // console.log("🚀 ~ file: Kata 16 - Case Maker II.js ~ line 24 ~ makeCase ~ newinput", newInput)
    const newInputSplit = newInput.split("");
    // console.log("🚀 ~ file: Kata 16 - Case Maker II.js ~ line 26 ~ makeCase ~ newInputSplit", newInputSplit)
    
    for (let i = 0; i < newInputSplit.length; i++) {
      if (newInputSplit[i - 1] === " ") {
        newInputSplit[i] = newInputSplit[i].toUpperCase();
      }
    }
    // console.log(newInputSplit);
    output = newInputSplit.join("").replace(/\s+/g, "");
  }

  if (cases === "snake") {
    return input.replace(/\s/g, "_");
  }

  if (cases === "kebab") {
    return input.replace(/\s/g, "-");
  }

  if (cases === "title") {
    const newInput = input.charAt(0).toUpperCase() + input.slice(1);
    const newInputSplit = newInput.split("");

    for (let i = 0; i < newInputSplit.length; i++) {
      if (newInputSplit[i - 1] === " ") {
        newInputSplit[i] = newInputSplit[i].toUpperCase();
      }
    }
    output = newInputSplit.join("");
  }

  if (cases === "vowel") {
    const inputSplit = input.split("");

    for(let i = 0; i < inputSplit.length; i++) {
      if (inputSplit[i] === "a" || inputSplit[i] === "e" || inputSplit[i] === "i" || inputSplit[i] === "o" || inputSplit[i] === "u") {  
        inputSplit[i]= inputSplit[i].toUpperCase();
      }
    }
    output = inputSplit.join("")
  }

  if (cases === "consonant") {
    const inputSplit = input.split("");

    for(let i = 0; i < inputSplit.length; i++) {
      if (inputSplit[i] === "a" || inputSplit[i] === "e" || inputSplit[i] === "i" || inputSplit[i] === "o" || inputSplit[i] === "u") {  
        inputSplit[i]= inputSplit[i].toLowerCase();
      } else {
        inputSplit[i]= inputSplit[i].toUpperCase();
      }
    }
    output = inputSplit.join("");
  }

  if (cases === "upper") {
    const inputSplit = input.split("");

    for (let i = 0; i < inputSplit.length; i++) {
      output += inputSplit[i].toUpperCase();
    }
    console.log("Line 87: ", output);
  }


  return output;
};

// console.log(makeCase("this is a string", "camel"));
// console.log(makeCase("this is a string", "pascal"));
// console.log(makeCase("this is a string", "snake"));
// console.log(makeCase("this is a string", "kebab"));
// console.log(makeCase("this is a string", "title"));
// console.log(makeCase("this is a string", "vowel"));
// console.log(makeCase("this is a string", "consonant"));