const checkVictory = require('./game-logic.js')
const gameapi = require('./gameapi.js')
const gameui = require('./gameui.js')
const store = require('../store.js')

let playerIs = 'X'
let numOfMoves = 1
let gameOver = false
let board = ['', '', '', '', '', '', '', '', '']
$('.numOfMovesDiv').text('0')
$('.playerDiv').text(playerIs)
const data = '{}'

const createGame = function () {
  gameapi.createGame(data)
  .then(gameui.createGameSuccess)
  .catch(gameui.gameCreateFailure)
}
const putMarker = function () {
  if (this.innerHTML === '&nbsp;' && gameOver === false) {
    $(this).text(playerIs)
    $(this).show()
    const id = $(this).attr('id')
    console.log(id)
    console.log(playerIs)
    let gamedata = {
      'game': {
        'cell': {
          'index': id,
          'value': playerIs
        },
        'over': gameOver
      }
    }
    console.log(gamedata)
    gameapi.updateGame(gamedata)
    console.log(store.game)
    console.log(id)
    board[id] = playerIs
    gameOver = checkVictory.checkVictory(playerIs, board, numOfMoves, gameOver)
    console.log(gameOver)
    if (gameOver === false) {
      $('.playerDiv').text(playerIs)
      $('.numOfMovesDiv').text(numOfMoves)
      numOfMoves += 1
      if (playerIs === 'X') {
        playerIs = 'O'
        $('.playerDiv').text(playerIs)
      } else playerIs = 'X'
      $('.playerDiv').text(playerIs)
    } else {
      gamedata = {
        'game': {
          'cell': {
            'index': id,
            'value': playerIs
          },
          'over': true
        }
      }
      console.log('Gameover: ', gamedata)
      gameapi.updateGame(gamedata)
    }
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
  createGame()
}
const getGamesOver = function () {
  gameapi.getGamesOver(data)
  .then(gameui.onGetGameSuccess)
  .catch(gameui.onGetGameFailure)
}
const addGameHandlers = () => {
  $('.game-cell').on('click', putMarker)
  $('.reset-button').on('click', resetBoard)
  $('.get-game').on('click', getGamesOver)
}

module.exports = {
  putMarker,
  addGameHandlers,
  resetBoard,
  createGame
}
