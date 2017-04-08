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
  // checks store for user data and throws and pops
  // a modal up if no data is found
  // this is necessary for bug fix
  if (store.user === undefined || store.user === null) {
    $('#changePasswordFailModal').modal('toggle')
  } else {
    // if user data is found then change password proceeds
    api.changePassword(data)
    // catch/fail scenario
  .then(ui.changePasswordSuccess)
  .catch(ui.changePasswordFailure)
  }
}
const addHandlers = () => {
  // click handler for forms
  $('#sign-up').on('submit', onSignUp)
  $('#sign-in').on('submit', onSignIn)
  $('#sign-out').on('submit', onSignOut)
  $('#change-password').on('submit', onChangePassword)
  // click handler for calling modals
  // can be accomplished with an <a> but
  // this is how it was implmented originally
  $('#signUp').on('click', callSignUpModal)
  $('#signIn').on('click', callSignInModal)
}

// couldn't pass parameters to a function that was
// being setup as a click handler so i created 2
// separate functions for my needs here
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
