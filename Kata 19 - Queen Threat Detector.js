let output = [];
let boardColumns = 8;

// Placeholders for whiteQueen and blackQueen X and Y axis
let whiteQueenX = whiteQueen[0];
let whiteQueenY = whiteQueen[1];
let blackQueenX = blackQueen[0];
let blackQueenY = blackQueen[1];

const generateBoard = (whiteQueen, blackQueen) => {
  // Create 8 x 8 chessboard 
  for (let i = 0; i < boardColumns; i++) {
    output[i] = [];
    for (let j = 0; j < boardColumns; j++) {
      // 0 in array represents an unoccupied square
      output[i].push(0);
    }
  }
  // 1 in the array represents a queen on the corresponding square
  output[whiteQueenX][whiteQueenY] = 1;
  output[blackQueenX][blackQueenY] = 1;
}


let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);

console.log(generatedBoard);
