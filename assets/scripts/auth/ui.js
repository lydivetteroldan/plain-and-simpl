'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#signUpMessage').text('Signed up successfully')
  $('#signUpMessage').css('color', 'green')
  $('#signUpButton').hide(200)
}

const signUpFailure = function () {
  $('#signUpMessage').text('Error on signing up')
  $('#signUpMessage').css('color', 'red')
}

const signInSuccess = function (data) {
  $('#signInMessage').text('Signed in successfully')
  $('#signInMessage').css('color', 'green')
  $('#signInButton').hide(200)
  $('#signUpButton').hide(200)
  $('#signedInButton').show(200)
  store.user = data.user
}

const signInFailure = function () {
  $('#signInMessage').text('Error on signing in')
  $('#signInMessage').css('color', 'red')
}

const changePasswordSuccess = function () {
  $('#changePwdMessage').text('Changed password successfully')
  $('#changePwdMessage').css('color', 'green')
}

const changePasswordFailure = function () {
  $('#changePwdMessage').text('Error on changing password')
  $('#changePwdMessage').css('color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure
}
