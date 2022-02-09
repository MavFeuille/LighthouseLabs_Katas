const calculateChange = (total, cash) => {
  // conversion rate
  const penny = 1
  const nickel = 5 * penny;
  const dime = 10 * penny;
  const quarter = 25 * penny;
  const oneDollar = 100 * penny;
  const twoDollars = 200 * penny;
  const fiveDollars = 500 * penny;
  const tenDollars = 1000 * penny;
  const twentyDollars = 2000 * penny;
  // change
}

console.log(calculateChange(1787, 2000));