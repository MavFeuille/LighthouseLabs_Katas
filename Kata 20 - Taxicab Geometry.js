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
  // Find position AFTER the 1st step


};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
