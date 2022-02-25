const blocksAway = (directions) => {
  let blocksAway = {east: 0, north: 0};
  let currentDirection = "";

  // Set the first direction from originate. Clues come from the first 2 indices of (directions)
  if (directions[0] === "right") {
    blocksAway.east += directions[1];
    currentDirection = "east";
  } else {
    blocksAway.north += directions[1];
    currentDirection = "north";
  }
  console.log("Current direction after the first step:", currentDirection);
  console.log("blocksAway after the first step:", blocksAway);

  // Loop through (directions) from 2nd index onwards to find the coming directions
  // for (let i = 2; i < directions.length; i += 2) {
  //   if (directions[i] === "right") {}
  // }
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));