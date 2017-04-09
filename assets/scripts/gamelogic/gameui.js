const store = require('../store.js')
const checkVictory = require('./game-logic.js')

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
  console.log(store.gameData[0].cells)
  let resultX = 0
  for (let i = 0; i < data.games.length; i++) {
    resultX = resultX + checkVictory.checkServerWins(store.gameData[i].cells, 'X')
  }
  let resultO = 0
  for (let i = 0; i < data.games.length; i++) {
    resultO = resultO + checkVictory.checkServerWins(store.gameData[i].cells, 'O')
  }
  const cat = data.games.length - (resultO + resultX)

  return data.games.length
}
const onGetGameFailure = (error) => {
  return error
}

module.exports = {
  createGameSuccess,
  gameCreateFailure,
  onGetGameSuccess,
  onGetGameFailure,
}
