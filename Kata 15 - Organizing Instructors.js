const organizeInstructors = (instructors) => {
  let output = {};
  let courseNames = [];

  for (const obj of instructors){
    // If there is no such course name in courseNames array, push this course name into courseNames
    if (courseNames.indexOf(obj.course) === -1){
      courseNames.push(obj.course);
    }
  }

  courseNames.forEach((course) => {
    // Set each course name be the key of output and assign undefined array as its value, i.e { Blockchain: [] }
    output[course] = [];

    // Loop through instructors array, if the course name from courseNames = instructors.course, push the instructor's name into courseNames' undefined array
    for (const obj of instructors){
      if (course === obj.course){
        output[course].push(obj.name);
      }
    }
  })
  return output;
}

console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));