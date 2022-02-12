const organizeInstructors = (instructors) => {
  let output = {};
  let courseNames = [];

  // Check if the course name has appeared in courseNames array, if not, push it to courseNames array
  for (const obj of instructors){
    // let course = obj.course;
    if (courseNames.indexOf(obj.course) === -1){
      courseNames.push(obj.course);
    }
    // console.log("courseNames: ", courseNames);
  }

  // Set empty [] as value/placeholder for each course name
  // Loop through each course name, if the course name in courseName array is the same as instructors.course, push the instructor name into the empty []
  courseNames.forEach((course) => {
    output[course] = [];
    for (const obj of instructors){
      if (obj.course === course){
        output[course].push(obj.name);
      }
    }
  });
  return output;
}

console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));

console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));