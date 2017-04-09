const store = require('../store.js')
const games = require('./game-logic.js')

const createGameSuccess = (data) => {
  store.game = data.game
  $('.board-container').show()
}
const gameCreateFailure = (error) => {
  return error
}
const onGetGameSuccess = (data) => {
  store.gameData = data.games
  games.displayWins()
}
const onGetGameFailure = (error) => {
  return error
}

module.exports = {
  createGameSuccess,
  gameCreateFailure,
  onGetGameSuccess,
  onGetGameFailure
}
