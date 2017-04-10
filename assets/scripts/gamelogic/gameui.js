const store = require('../store.js')
const game = require('./game-logic.js')

const createGameSuccess = (data) => {
  store.game = data.game
  $('.board-container').show()
}
const gameCreateFailure = (error) => {
  return error
}
const updateGameSuccess = (data) => {
  store.gameData = data.games
}
const updateGameFailure = (data) => {
  store.gameData = data.games
}
const onGetGameSuccess = (data) => {
  store.gameData = data.games
  game.displayWins()
  console.log(data.games)
}
const onGetGameFailure = (error) => {
  return error
}

module.exports = {
  createGameSuccess,
  gameCreateFailure,
  onGetGameSuccess,
  onGetGameFailure,
  updateGameSuccess,
  updateGameFailure
}
