let output = [];
let boardColumns = 8;

const generateBoard = (whiteQueen, blackQueen) => {
  // Create 8 x 8 chessboard 
  for (let i = 0; i < boardColumns; i++) {
    output[i] = [];
    for (let j = 0; j < boardColumns; j++) {
      // 0 in array represents an unoccupied square
      output[i].push(0);
    }
  }
}


let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);

console.log(generatedBoard);
