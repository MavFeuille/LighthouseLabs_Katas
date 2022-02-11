const organizeInstructors = (instructors) => {
  let output = {};

  for (let i = 0; i < instructors.length; i ++) {
    instructors[i].course = Object.keys(output);
    instructors[i].name = Object.values(output);
  }
  console.log("output: ", output);
}

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));