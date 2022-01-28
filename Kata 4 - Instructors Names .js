const instructorWithLongestName = function(instructors) {
  let LongestName = {name: " ", course: " " };
  for (let i = 0; i < instructors.length ; i++) {
    if (instructors[i].name.length > LongestName.name.length) {
      LongestName = instructors[i];
    }
  }
  return LongestName;
};

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
