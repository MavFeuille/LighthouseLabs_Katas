let whiteQueen = [0, 0];
let blackQueen = [5, 7];
let generatedBoard = generateBoard(whiteQueen, blackQueen);
let boardColumns = 8;


console.log(generatedBoard);
console.log(queenThreat(generatedBoard));