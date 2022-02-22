let output = [];
let boardColumns = 8;

const generateBoard = (whiteQueen, blackQueen) => {
  for (let i = 0; i < boardColumns; i++) {
    console.log(output[i]);
  }
}


let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);

console.log(generatedBoard);
