const checkVictory = require('./game-logic.js')
const gameapi = require('./gameapi.js')
const gameui = require('./gameui.js')
const store = require('../store.js')
// empty string object to pass to api for createGame
const data = '{}'
// instantiates the needed set of variables
let id = null
let playerIs = 'X'
let numOfMoves = 1
let gameOver = false
let board = ['', '', '', '', '', '', '', '', '']
// displays the current player
$('.playerDiv').text(playerIs)
// retrieves the number of games completed on server
// display portion happens in onGetGameSuccess
const getGamesOver = function () {
// runs api call passing data
  gameapi.getGamesOver()
// catch/fail for getGamesOver
  .then(gameui.onGetGameSuccess)
  .catch(gameui.onGetGameFailure)
}
// creates game on server
// createGameSuccess displays board
const createGame = function () {
  playerIs = 'X'
  gameapi.createGame()
  // catch/fail for createGame
  .then(gameui.createGameSuccess)
  .catch(gameui.gameCreateFailure)
  console.log('create game ran')
  getGamesOver()
}
// board reset function
const resetBoard = function () {
  // fills div tags in table back with non-breaking space
  $('#0').text(String.fromCharCode(160))
  $('#1').text(String.fromCharCode(160))
  $('#2').text(String.fromCharCode(160))
  $('#3').text(String.fromCharCode(160))
  $('#4').text(String.fromCharCode(160))
  $('#5').text(String.fromCharCode(160))
  $('#6').text(String.fromCharCode(160))
  $('#7').text(String.fromCharCode(160))
  $('#8').text(String.fromCharCode(160))
  // sets board back to all empty
  board = ['', '', '', '', '', '', '', '', '']
  // resets number of moves
  numOfMoves = 1
  // sets player back to X
  // playerIs = 'X'
  // updates playerIs display on page
  $('.playerDiv').text(playerIs)
  // resets gameOver to false so game can continue
  gameOver = false
  // creates a new game on server
  // i found this necessary for a bug fix
  createGame()
}
// primary function of board
// added to each td on page load
const putMarker = function () {
  // checks is space is empty and if game is still going
  // needs both checks to fully handle gam flow
  if (this.innerHTML === '&nbsp;' && gameOver === false) {
    // puts player on the board on screen
    $(this).text(playerIs)
    store.player = playerIs
    // unhides the div
    $(this).show()
    // sets id to the corresponding id of the div clicked
    // this value is used as a 1:1 control for the index
    // of the array being used in memory for win Compares
    // this allows the board on screen to directly mimic
    // the board stored in memory
    id = $(this).attr('id')
    // selects the color of the piece
    if (playerIs === 'X') {
      $(this).attr('class', 'game-cell x')
    } else $(this).attr('class', 'game-cell o')
    // stores in store for later use
    store.cell = id
    // build update api call body to update server
    let gamedata = {
      'game': {
        'cell': {
          // pulls id to correlate index in server call as well
          'index': id,
          // passes in playerIs for player tracking
          'value': playerIs
        },
        // passes game state
        'over': gameOver
      }
    }
    // runs the api call passing the gamedata we just built int the
    // above block of code
    gameapi.updateGame(gamedata)
    .then(gameui.updateGameSuccess)
    .catch(gameui.updateGameSuccess)
    // updates the array in memory
    board[id] = playerIs
    // runs a check for winner using the current player, current state of the
    // board, current number of moves, and game state
    gameOver = checkVictory.checkVictory(playerIs, board, numOfMoves, gameOver)
    // checks game state once more and continues if game is still going
    // otherwise catches to final else below and finishes the game
    // updating the server with final games state
    if (gameOver === false) {
      // incriments number of moves
      numOfMoves += 1
      // handles switching the player
      if (playerIs === 'X') {
        playerIs = 'O'
        // updates player display on page
        $('.playerDiv').text(playerIs)
      } else playerIs = 'X'
      // updates player display on page
      $('.playerDiv').text(playerIs)
      gameapi.updateGame(gamedata)
      .then(gameui.updateGameSuccess)
      .catch(gameui.updateGameSuccess)
    } else {
      $(this).text(playerIs)
      // hard coded game over state
      const endGame = function () {
        gamedata = {
          'game': {
            'cell': {
              'index': id,
              'value': playerIs
            },
            'over': true
          }
        }
      // passes final game state to server
        gameapi.updateGame(gamedata)
        .then(gameui.updateGameSuccess)
        .catch(gameui.updateGameSuccess)
      // clears the board and starts a new game
        resetBoard()
      }
      setTimeout(endGame, 2500)
      setTimeout(getGamesOver, 6000)
    }
  }
}

const addGameHandlers = () => {
  // add the putMarker click event to the
  // cells on the game board
  $('.game-cell').on('click', putMarker)
  $('.stats').on('click', getGamesOver)
}

module.exports = {
  putMarker,
  addGameHandlers,
  resetBoard,
  createGame,
  getGamesOver,
  playerIs,
  id
}
