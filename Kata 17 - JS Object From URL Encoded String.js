const urlDecode = (text) => {
  let output = {};

  let newText = text
                  .replace(/&/g, ", ")
                  .replace(/=/g, ": ")
                  .replace(/%20/g, " ")
                  .split(", ");

  // console.log("🚀 ~ file: Kata 17 - JS Object From URL Encoded String.js ~ line 9 ~ urlDecode ~ newText", newText)
  
  for (const item of newText) {
    let newItem = item.split(":");
    output[newItem[0]] = newItem[1]
    console.log("output in for loop", output)
  }
  // return output;
}

console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));