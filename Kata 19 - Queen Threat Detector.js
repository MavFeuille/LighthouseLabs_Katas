let output = [];
let boardColumns = 8;


const generateBoard = (whiteQueen, blackQueen) => {
  // Placeholders for whiteQueen and blackQueen X and Y axis
  let whiteX = whiteQueen[0];
  let whiteY = whiteQueen[1];
  let blackX = blackQueen[0];
  let blackY = blackQueen[1];

  // Create 8 x 8 chessboard 
  for (let i = 0; i < boardColumns; i++) {
    output[i] = [];
    for (let j = 0; j < boardColumns; j++) {
      // 0 in array represents an unoccupied square
      output[i].push(0);
    }
  }
  // 1 in the array represents a queen on the corresponding square
  output[whiteX][whiteY] = 1;
  output[blackX][blackY] = 1;
  return output;
};

// Check if 2 queens are positioned to attack each other
const queenThreat = (generateBoard) => {

};

let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);

console.log(generatedBoard);
console.log(queenThreat(generatedBoard));
