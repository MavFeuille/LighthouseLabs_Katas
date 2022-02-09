const calculateChange = (total, cash) => {
  /* conversion rate
  penny = 1
  nickel = 5 * penny;
  dime = 10 * penny;
  quarter = 25 * penny;
  oneDollar = 100 * penny;
  twoDollars = 200 * penny;
  fiveDollars = 500 * penny;
  tenDollars = 1000 * penny;
  twentyDollars = 2000 * p
  */
 
  // change
  let change = cash - total;

  // placeholder for output
  let output = {}
  };

  while (change > 0) {
    if (change >= 2000) {
      output.twentyDollar += 1;
      change -= 1000;
    } else if ()
  }
}

console.log(calculateChange(1787, 2000));