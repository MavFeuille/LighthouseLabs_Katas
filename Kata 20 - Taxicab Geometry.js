const blocksAway = (directions) => {
  let blocksAway = {east: 0, north: 0};
  let inDirection = "";

  // Set the first direction from originate. Clues come from the first 2 indices of (directions)
  if (directions[0] === "right") {
    blocksAway.east += directions[1];
    inDirection = "east";
  } else {
    blocksAway.north += directions[1];
    inDirection = "north";
  }


}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));