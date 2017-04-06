const checkVictory = require('./game-logic.js')

let playerIs = 'X'
let numOfMoves = 1
let gameOver = false
let board = ['', '', '', '', '', '', '', '', '']
$('.numOfMovesDiv').text('0')
$('.playerDiv').text(playerIs)

const putMarker = function () {
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

const resetBoard = function () {
  $('#0').text(String.fromCharCode(160))
  $('#1').text(String.fromCharCode(160))
  $('#2').text(String.fromCharCode(160))
  $('#3').text(String.fromCharCode(160))
  $('#4').text(String.fromCharCode(160))
  $('#5').text(String.fromCharCode(160))
  $('#6').text(String.fromCharCode(160))
  $('#7').text(String.fromCharCode(160))
  $('#8').text(String.fromCharCode(160))
  board = ['', '', '', '', '', '', '', '', '']
  numOfMoves = 1
  playerIs = 'X'
  $('.playerDiv').text(playerIs)
  $('.numOfMovesDiv').text(numOfMoves)
  gameOver = false
}

const addGameHandlers = () => {
  $('.game-cell').on('click', putMarker)
  $('.reset-button').on('click', resetBoard)
}

module.exports = {
  putMarker,
  addGameHandlers,
  resetBoard
}
