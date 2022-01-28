const urlEncode = (text) => {
  // Simple solution:
  return text.trim().replaceAll(" ", "%20");
}

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));