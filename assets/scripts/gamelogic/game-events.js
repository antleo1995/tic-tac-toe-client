const checkVictory = require('./game-logic.js')

let playerIs = 'X'
let numOfMoves = 1
let gameOver = false
const board = ['', '', '', '', '', '', '', '', '']

$('.numOfMovesDiv').text('0')
$('.playerDiv').text(playerIs)

const putMarker = function () {
  // console.log('Clicked a game cell')
  // console.log(playerIs)
  // console.log(this.text)
  if (this.innerHTML === '&nbsp;' && gameOver === false) {
    $(this).text(playerIs)
    $(this).show()
    const id = $(this).attr('id')
    console.log(id)
    board[id] = playerIs
    gameOver = checkVictory.checkVictory(playerIs, board, numOfMoves, gameOver)
    console.log(gameOver)
    if (gameOver === false) {
    $('.playerDiv').text(playerIs)
    $('.numOfMovesDiv').text(numOfMoves)
    numOfMoves += 1
    // console.log(board)
    if (playerIs === 'X') {
      playerIs = 'O'
      $('.playerDiv').text(playerIs)
    } else playerIs = 'X'
    $('.playerDiv').text(playerIs)
  } else (console.log('GameOver'))
}
}

const addGameHandlers = () => {
  $('.game-cell').click(putMarker)
}

module.exports = {
  putMarker,
  addGameHandlers
}
