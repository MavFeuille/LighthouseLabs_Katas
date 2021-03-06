/*
The taxi driver will always start at the same position, in the most south west position on the grid. 
This means that the output will only need to specify an east and north position, since the taxi driver can only end up in these East and North of the starting point.
*/

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

  // Loop through directions to find out the next directions base on the first move.
  // Loop directions from 3rd index and increment by 2 since the first 2 indices are already checked above.
  for (let i = 2; i < directions.length; i += 2) {
    if (directions[i] === "left") {
      if (currentFacing === "east") {
        currentFacing = "north";
      } else if (currentFacing === "south") {
        currentFacing = "east";
      } else if (currentFacing === "west") {
        currentFacing = "south";
      } else if (currentFacing === "north") {
        currentFacing = "west";
      }
    } else if (directions[i] === "right") {
      if (currentFacing === "east") {
        currentFacing = "south";
      } else if (currentFacing === "south") {
        currentFacing = "west";
      } else if (currentFacing === "west") {
        currentFacing = "north";
      } else if (currentFacing === "north") {
        currentFacing = "east";
      }
    }

    // Count and adjust the number of blocks moved in each direction
    if (currentFacing === "east") {
      finalPosition.east += directions[i + 1];
    } else if (currentFacing === "south") {
      finalPosition.north -= directions[i + 1];
    } else if (currentFacing === "west") {
      finalPosition.east -= directions[i + 1];
    } else if (currentFacing === "north") {
      finalPosition.north += directions[i + 1];
    }
  }  
  return finalPosition;
}

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));