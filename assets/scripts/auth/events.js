'use strict'

const getFormFields = require(`../../../lib/get-form-fields`)
const api = require('./api')
const ui = require('./ui')
const store = require('../store')

const onSignUp = function (event) {
  const data = getFormFields(this)
  event.preventDefault()
  api.signUp(data)
    .then(ui.signUpSuccess)
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  console.log('Sign-in ran!')

  const data = getFormFields(this)
  api.signIn(data)
  .then(ui.signInSuccess)
  .catch(ui.signInFailure)
}
const onSignOut = function (event) {
  event.preventDefault()
  api.signOut()
  .then(ui.signOutSuccess)
  .catch(ui.signOutFailure)
}
const onChangePassword = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  if (store.user === undefined || store.user === null) {
    $('#changePasswordFailModal').modal('toggle')
  } else {
    api.changePassword(data)
  .then(ui.changePasswordSuccess)
  .catch(ui.changePasswordFailure)
  }
}
const addHandlers = () => {
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  $('#signUp').on('click', callSignUpModal)
  $('#signIn').on('click', callSignInModal)
}

const callSignUpModal = function () {
  $('#signUpModal').modal()
}

const callSignInModal = function () {
  $('#signInModal').modal()
}

module.exports = {
  addHandlers,
  callSignUpModal,
  callSignInModal
}
