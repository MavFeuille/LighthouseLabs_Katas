const urlDecode = (text) => {
  let output = {};

  // Decode give URL encoding rules
  let newText = text
                  .replace(/&/g, ", ")
                  .replace(/=/g, ": ")
                  .replace(/%20/g, " ")
                  .split(", ");

  /* Loop through newText and split each item by ":" to get key-value pair.
     Therefore, each item will be split into 2 indices. 
     [0] will be output[key]
     [1] will be the value of output[key]
  */
  for (const item of newText) {
    let newItem = item.split(":");
    output[newItem[0]] = newItem[1]
  }
  return output;
}

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);