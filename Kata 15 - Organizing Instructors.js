const organizeInstructors = (instructors) => {
  let output = {};
  let courseNames = [];

  for (const obj of instructors){
    if (courseNames.indexOf(obj.course) === -1){
      courseNames.push(obj.course);
    }
    console.log("courseNames: ", courseNames)
  }
}

console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));