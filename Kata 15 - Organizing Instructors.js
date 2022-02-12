const organizeInstructors = (instructors) => {
  let output = {};
  let instructorsArray = [];
  let courseNames = [];

  // Check if the course name has appeared in courseNames array, if not, push it to courseNames array
  for (const obj of instructors){
    // let course = obj.course;
    if (courseNames.indexOf(obj.course) === -1){
      courseNames.push(obj.course);
    }
    // console.log("courseNames: ", courseNames);
  }
}

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));