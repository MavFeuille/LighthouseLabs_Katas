const blocksAway = (directions) => {
  let finalPosition = {east: 0, north: 0};
  let facing = "";

  // Find position of the 1st step. (Base on the instructions, either left or right will be given)
  // Only left or right will be given in the directions
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
      } else { // if facing === "north"
        facing === "east";
      }
    }
    console.log("Position after direction[i]: ", directions[i], facing);

    // Increment or decrement each direction's count
    if (facing === "east") {
      finalPosition.east += 1;
    }
    if (facing === "north") {
      finalPosition.north += 1;
    }
    if (facing === "west") {
      finalPosition.east -= 1;
    }
    if (facing === "south") {
      finalPosition.north -= 1;
    }

    console.log("Counts for finalPosition in for-loop", finalPosition)
  }
  return finalPosition;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
