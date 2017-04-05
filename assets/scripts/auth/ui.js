'use strict'
const store = require('../store.js')

const signUpSuccess = (data) => {
  console.log(data)
}

const signUpFailure = (error) => {
  console.error(error)
}
const signInSuccess = (data) => {
  console.log('SignIn success ran. Data is: ', data)
  $('.sign-out-button').show()
  store.user = data.user
}
const signInFailure = (error) => {
  console.error('SignIn failure ran. Error is: ', error)
}
const signOutSuccess = () => {
  console.log('SignOut success ran. Data is: ', store)
  $('.sign-out-button').hide()
  store.user = null
}
const signOutFailure = (error) => {
  console.error('SignOut failure ran. Error is: ', error)
}
const changePasswordSuccess = () => {
  console.log('Change Password. Data is: ', store)
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
