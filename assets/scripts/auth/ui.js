'use strict'
const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log(data)
  $('#signUpModal').modal('toggle')
  $('#signInModal').modal('toggle')
}

const signUpFailure = (error) => {
  console.error(error)
}
const signInSuccess = (data) => {
  console.log('SignIn success ran. Data is: ', data)
  $('.sign-out-button').show()
  $('#signInModal').modal('toggle')
  store.user = data.user
}
const signInFailure = (error) => {
  console.error('SignIn failure ran. Error is: ', error)
}
const signOutSuccess = () => {
  console.log('SignOut success ran. Data is: ', store)
  $('.sign-out-button').hide()
  $('#signOutModal').modal('toggle')
  store.user = null
}
const signOutFailure = (error) => {
  console.error('SignOut failure ran. Error is: ', error)
}
const changePasswordSuccess = () => {
  console.log('Change Password. Data is: ', store)
  $('#changePasswordModal').modal('toggle')
}
const changePasswordFailure = (error) => {
  console.error('Change Password failure ran. Error is: ', error)
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
