const store = require('../store.js')

const createGameSuccess = (data) => {
  console.log('SignIn success ran. Data is: ', data)
  store.game = data.game
  $('.board-container').show()
  $('.create-game').hide()
  console.log(data.game)
}
const gameCreateFailure = (error) => {
  console.error('Create game failure. Error is: ', error)
}
const onGetGameSuccess = (data) => {
  store.gameData = data.games
  console.log(data.games)
  console.log(data.games.length)
  $('.NumberOfGames').text(data.games.length)
  return data.games.length
}
const onGetGameFailure = (error) => {
  console.log(error)
}

module.exports = {
  createGameSuccess,
  gameCreateFailure,
  onGetGameSuccess,
  onGetGameFailure
}
