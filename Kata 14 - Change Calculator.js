const calculateChange = (total, cash) => {
  const denominations = {
    twentyDollar: 2000,
    tenDollar: 1000,
    fiveDollar: 500,
    twoDollar: 200,
    oneDollar: 100,
    quarter: 25,
    dime: 10,
    nickel: 5,
    penny: 1
  };
 
  // change
  let changeAmount = cash - total;
  
  // placeholder for output
  let output = {}
  
  for (const key in denominations) {
    const currentDemoniation = denominations[key];
    let outputKey = key;

    if (changeAmount - currentDemoniation > 0) {
      changeAmount -= currentDemoniation;
      output[outputKey] = 1;

      while (currentDemoniation <= changeAmount) {
        output[outputKey] += 1;
        changeAmount -= currentDemoniation;
      }
    } 
  }
  return output;
}

console.log(calculateChange(1787, 2000));