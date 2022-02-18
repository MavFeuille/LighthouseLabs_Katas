/*
Precedence of each of the casing styles are as follows, values higher in the list should be processed first:
1. camel, pascal, snake, kebab, title
2. vowel, consonant
3. upper, lower
*/

const makeCase = (input, cases) => {
  let output = "";
  let casesArray = [];

  // Check if cases is in array form
  if(Array.isArray(cases)) {
    for (const style of cases) {
      casesArray.push(style);
    } 
  } else {
    casesArray.push(cases);
  }

  for (const style of casesArray) {
    // "Camel" case style
    if (style === "camel") {
      const inputSplit = input.split("");
      for (let i = 0; i < inputSplit.length; i++) {
        if (inputSplit[i - 1] === " ") {
          inputSplit[i] = inputSplit[i].toUpperCase();
        }
      }
      output = inputSplit.join("").replace(/\s+/g, "");
    }
    
    // "Pascal" case style
    if (style === "pascal") {
      const newInput = input.charAt(0).toUpperCase() + input.slice(1);
      const newInputSplit = newInput.split("");
      
      for (let i = 0; i < newInputSplit.length; i++) {
        if (newInputSplit[i - 1] === " ") {
          newInputSplit[i] = newInputSplit[i].toUpperCase();
        }
      }
      output = newInputSplit.join("").replace(/\s+/g, "");
    }
  
    // "Snake" case style
    if (style === "snake") {
      output = input.replace(/\s/g, "_");
    }
  
    // "Kebab" case style
    if (style === "kebab") {
      output = input.replace(/\s/g, "-");
    }
  
    // "Title" case style
    if (style === "title") {
      const newInput = input.charAt(0).toUpperCase() + input.slice(1);
      const newInputSplit = newInput.split("");
  
      for (let i = 0; i < newInputSplit.length; i++) {
        if (newInputSplit[i - 1] === " ") {
          newInputSplit[i] = newInputSplit[i].toUpperCase();
        }
      }
      output = newInputSplit.join("");
    }
  
    // "Style" case style
    if (style === "vowel") {
      const inputSplit = input.split("");
  
      for(let i = 0; i < inputSplit.length; i++) {
        if (inputSplit[i] === "a" || inputSplit[i] === "e" || inputSplit[i] === "i" || inputSplit[i] === "o" || inputSplit[i] === "u") {  
          inputSplit[i]= inputSplit[i].toUpperCase();
        }
      }
      output = inputSplit.join("")
    }
  
    // "Consonant" case style
    if (style === "consonant") {
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
  
    // "Upper" case style
    if (style === "upper") {
      const inputSplit = input.split("");
  
      for (let i = 0; i < inputSplit.length; i++) {
        output += inputSplit[i].toUpperCase();
      }
    }
  
    // "Lower" case style
    if (style === "lower") {
      const inputSplit = input.split("");
  
      for (let i = 0; i < inputSplit.length; i++) {
        output += inputSplit[i].toLowerCase();
      }
    }
    input = output; // Important for muliple cases like ['upper', 'snake']
  }
  return output;
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));