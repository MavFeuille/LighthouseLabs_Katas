const blocksAway = (directions) => {
  let finalPosition = {east: 0, north: 0};
  let currentFacing = "";

  // Find out the 1st move of direction and blocks from the first two indices from directions.
  // Base on the instructions, it will either start from left or right
  if (directions[0] === "right") {
    finalPosition.east += directions[1];
    currentFacing = "east";
  } else {
    finalPosition.north += directions[1];
    currentFacing = "north";
  }
  // Loop through directions to find out the next directions base on the first move
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));