const repeatNumbers = (data) => {
  let output = 0;

  for (let i = 0; i < data.length; i++) {
    output = data.map(([value, count]) => String(value).repeat(count));
    return output.join(', ');
  }
}

console.log(repeatNumbers([[1, 10]]));
console.log(repeatNumbers([[1, 2], [2, 3]]));
console.log(repeatNumbers([[10, 4], [34, 6], [92, 2]]));
