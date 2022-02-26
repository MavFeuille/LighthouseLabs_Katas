const blocksAway = (directions) => {
  let finalPosition = {east: 0, north: 0};
  let facing = "";

  // Find position of the 1st step. (Base on the instructions, either left or right will be given)
  if (directions[0] === "right") {
    finalPosition.east += 1;
    facing = "east";
  } else {
    finalPosition.north += 1;
    facing = "north";
  }
  console.log("Position of 1st step at Line 13: ", finalPosition);

  // Find position AFTER the 1st step, i.e. after 2nd index in the parameter
  for (let i = 2; i < directions.length; i += 2) {
    if (directions[i] === "left") {
      // Check current facing direction before moving "left" then assign new direction after moved to "left"
      if (facing === "east") {
        facing = "north";
      } 
      if (facing === "south") {
        facing = "east";
      } 
      if (facing === "west") {
        facing = "south";
      } 
      if (facing === "north") {
        facing === "west";
      }
    } 
    console.log("Position after direction[i]: ", finalPosition);

  }


};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
