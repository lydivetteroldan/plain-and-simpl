'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#signUpMessage').text('Signed up successfully')
  $('#signUpMessage').css('color', 'green')
}

const signUpFailure = function () {
  $('#signUpMessage').text('Error on signing up')
  $('#signUpMessage').css('color', 'red')
}

const signInSuccess = function (data) {
  $('#signInMessage').text('Signed in successfully')
  $('#signInMessage').css('color', 'green')
  store.user = data.user
}

const signInFailure = function () {
  $('#signInMessage').text('Error on signing in')
  $('#signInMessage').css('color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure
}
