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
      } else if (facing === "south") {
        facing = "east";
      } else if (facing === "west") {
        facing = "south";
      } else { // if facing === "north"
        facing === "west";
      }
    } else if (directions[i] === "right") {
      // Check current facing direction before moving "right" then assign new direction after moved to "right"
      if (facing === "east") {
        facing = "south";
      } else if (facing === "south") {
        facing = "west";
      } else if (facing === "west") {
        facing = "north";
      } else {
        facing === "east";
      }
    }
    console.log("Position after direction[i]: ", directions[i], facing);
  }


};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
