const urlDecode = (text) => {

  let removeAmpersandText = text.replace("&", ", ");
  console.log("🚀 ~ file: Kata 17 - JS Object From URL Encoded String.js ~ line 4 ~ urlDecode ~ removeAmpersandText", removeAmpersandText)
  
}

console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));