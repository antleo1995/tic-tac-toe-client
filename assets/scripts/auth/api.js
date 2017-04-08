'use strict'
const config = require('../config')
const store = require('../store.js')
const game = require('../gamelogic/game-events.js')
const gameapi = require('../gamelogic/gameapi.js')

const signUp = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    data
  })
}
const signIn = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    data
  })
}
const signOut = () => {
  const gamedata = {
    'game': {
      'cell': {
        'index': store.cell,
        'value': game.playerIs
      },
      'over': true
    }
  }
  gameapi.updateGame(gamedata)
  return $.ajax({
    url: config.apiOrigin + '/sign-out/' + store.user.id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}
const changePassword = (data) => {
  return $.ajax({
    url: config.apiOrigin + '/change-password/' + store.user.id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
