const multiplicationTable = (maxValue) => {
  let row = "";

  for (let i = 1; i <= maxValue; i++) {
    for (let j = 1; j <= maxValue; j++) {
      row += (i * j) + " ";
    }
    row += "\n";
  }
  return row;
}

console.log(multiplicationTable(1));

console.log(multiplicationTable(10));