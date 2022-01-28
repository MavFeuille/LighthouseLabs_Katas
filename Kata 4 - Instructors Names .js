const instructorWithLongestName = (instructors) => {
  let longestName = {name: "", course: ""};

  for (let obj of instructors) {
    if (obj.name.length > longestName.name.length) {
      longestName = obj;
    }
  }
  return longestName;
}

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));
