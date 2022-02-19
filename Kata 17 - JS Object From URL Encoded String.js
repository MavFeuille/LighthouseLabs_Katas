const urlDecode = (text) => {
  let output = {};

  let newText = text
                  .replace(/&/g, ", ")
                  .replace(/=/g, ": ")
                  .replace(/%20/g, " ")
                  .split(", ");

  console.log("🚀 ~ file: Kata 17 - JS Object From URL Encoded String.js ~ line 9 ~ urlDecode ~ newText", newText)
  
  for (const item of newText){
 
    let key = item.slice(0, item.indexOf(":"));
    let value = item.slice(item.indexOf(":"));
    // console.log("🚀 ~ file: Kata 17 - JS Object From URL Encoded String.js ~ line 16 ~ urlDecode ~ value", value)
    // console.log("🚀 ~ file: Kata 17 - JS Object From URL Encoded String.js ~ line 14 ~ urlDecode ~ key:", key)
    // console.log("🚀 ~ file: Kata 17 - JS Object From URL Encoded String.js ~ line 14 ~ urlDecode ~ newItem", newItem)

  }
}

console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));