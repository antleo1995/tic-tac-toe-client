const store = require('../store.js')
const checkVictory = function (player, board, numOfMoves, gameOver) {
 // Compares the current player and board to list of winning combos
 // uses number of moves and gameover state to control flow of code
 // and determine a tie
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
    // if successful identify player and update their score.
    // returns true if either player wins to indicate game over
    if (player === 'X') {
      $('#gameStateModal').modal('toggle')
      $('.reset-button').show()
      return true
    } else {
      $('#gameStateModal').modal('toggle')
      $('.reset-button').show()
      return true
    }
    // if no winner continues to run while number of moves is less than 9
    // returns false to indicate game is still on going
  } else {
    if (numOfMoves < 9 && gameOver === false) {
      return false
    } else if (numOfMoves === 9 && gameOver === false) {
      $('#catWonModal').modal('toggle')
      $('.reset-button').show()
    }
  }
}

const checkServerWins = function (board, player) {
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
    // if successful identify player and update their score.
    // returns true if either player wins to indicate game over
    return true
  } else return false
}
const displayWins = function () {
  let resultX = 0
  let resultO = 0
  for (let i = 0; i < store.gameData.length; i++) {
    if (checkServerWins(store.gameData[i].cells, 'X') === true) {
      resultX += 1
    } else if (checkServerWins(store.gameData[i].cells, 'O') === true) {
      resultO += 1
    } else {}
  }
  const cat = store.gameData.length - (resultO + resultX)
  $('.NumberOfGames').text(store.gameData.length)
  $('.NumberXwins').text(resultX)
  $('.NumberOwins').text(resultO)
  $('.NumberCatWins').text(cat)
}

module.exports = {
  checkVictory,
  checkServerWins,
  displayWins
}
