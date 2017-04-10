'use strict'
const store = require('../store.js')
const game = require('../gamelogic/game-events.js')
const gameapi = require('../gamelogic/gameapi.js')
const gameui = require('../gamelogic/gameui.js')
// const gamelogic = require('../gamelogic/game-logic.js')

const signUpSuccess = (data) => {
  $('#signUpModal').modal('toggle')
  $('#signInModal').modal('toggle')
}

const signUpFailure = (error) => {
  $('#authenticationFailModal').modal('toggle')
  return error
}
const signInSuccess = (data) => {
  $('.sign-out-button').show()
  $('.dummy-board').hide()
  $('#signInModal').modal('toggle')
  $('.game-board').show()
  $('.change-password').show()
  store.user = data.user
  game.createGame()
}
const signInFailure = (error) => {
  $('#authenticationFailModal').modal('toggle')
  return error
}
const signOutSuccess = () => {
  $('.sign-out-button').hide()
  $('#signOutModal').modal('toggle')
  $('.game-board').hide()
  $('.create-game').hide()
  $('.reset-button').hide()
  $('.change-password').hide()
  store.user = null
  store.games = null
}
const signOutFailure = (error) => {
  return error
}
const changePasswordSuccess = () => {
  $('#changePasswordSucceedModal').modal('toggle')
}
const changePasswordFailure = (error) => {
  $('#authenticationFailModal').modal('toggle')
  return error
}
module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  signOutSuccess,
  signOutFailure,
  changePasswordSuccess,
  changePasswordFailure
}
