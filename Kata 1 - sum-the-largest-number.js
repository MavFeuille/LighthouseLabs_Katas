//Instruction: Given an array of 2 or more numbers. Find the two largest numbers in that array, and sum them together.

const sumLargestNumbers = data => {
  let firstLargest = 0;
  let secondLargest = 0;

  for (let i = 0; i < data.length; i ++) {
    if (data[i] > firstLargest) {
      firstLargest = data[i];
    }
  }
  data.splice(data.indexOf(firstLargest), 1);

  for (let j = 0; j < data.length; j ++) {
    if (data[j] > secondLargest && data[j] < firstLargest) {
      secondLargest = data[j];
    } 
  }
  return secondLargest + firstLargest;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));