const store = require('../store.js')

const createGameSuccess = (data) => {
  store.game = data.game
  $('.board-container').show()
}
const gameCreateFailure = (error) => {
  return error
}
const onGetGameSuccess = (data) => {
  store.gameData = data.games
  $('.NumberOfGames').text(data.games.length)
  return data.games.length
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
