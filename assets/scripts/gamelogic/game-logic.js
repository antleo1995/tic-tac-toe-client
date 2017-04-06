const checkVictory = function (player, board, numOfMoves, gameOver) {
 // Check Victory is the function
  console.log(board)
  if (
    // First row check
    (board[0] === player && board[1] === player && board[2] === player) ||
    // Second row check
    (board[3] === player && board[4] === player && board[5] === player) ||
     // Third row check
    (board[6] === player && board[7] === player && board[8] === player) ||
    // First column check
    (board[0] === player && board[3] === player && board[6] === player) ||
    // Second column check
    (board[1] === player && board[4] === player && board[7] === player) ||
     // Third column check
    (board[2] === player && board[5] === player && board[8] === player) ||
    // Downward Diag check
    (board[0] === player && board[4] === player && board[8] === player) ||
     // Upward Diag check
    (board[6] === player && board[4] === player && board[2] === player)) {
    // add score to global counter
    // _____________________________
    // if successful identify player and update their score.
    // let gameWon = true
    if (player === 'X') {
      console.log('Player X has won!')
      return true
    } else {
      console.log('Player O has won!')
      return true
    }  // Declare the WINNER!!!!!
    // If no winner check for tie
  } else {
    if (numOfMoves < 9 && gameOver === false) {
    console.log('No One has won!. Checking for Tie')
    return false}
    else (numOfMoves = 9 && gameOver === false)
    console.log('cat won')
  }
}
module.exports = {
  checkVictory
}
