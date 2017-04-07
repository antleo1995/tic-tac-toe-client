const store = require('../store.js')

const createGameSuccess = (data) => {
  console.log('SignIn success ran. Data is: ', data)
  store.game = data.game
  console.log(data.game)
}
const gameCreateFailure = (error) => {
  console.error('Create game failure. Error is: ', error)
}
module.exports = {
  createGameSuccess,
  gameCreateFailure
}
