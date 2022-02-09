const calculateChange = (total, cash) => {
  const dominations = {
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
  

}

console.log(calculateChange(1787, 2000));