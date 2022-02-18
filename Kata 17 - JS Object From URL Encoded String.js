const urlDecode = (text) => {
  let output = {};

  let newText = text
                  .replace(/&/g, ", ")
                  .replace(/=/g, ": ")
                  .replace(/%20/g, " ")
                  .split(", ");
  console.log("🚀 ~ file: Kata 17 - JS Object From URL Encoded String.js ~ line 7 ~ urlDecode ~ newText", newText)
  

}

console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));