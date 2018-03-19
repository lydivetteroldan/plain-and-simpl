'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('#signUpMessage').text('Signed up successfully')
  $('#signUpMessage').css('color', 'green')
  $('#signUpButton').hide(200)
  store.user = data.user
}

const signUpFailure = function () {
  $('#signUpMessage').text('Error on signing up')
  $('#signUpMessage').css('color', 'red')
  $('#signUpForm').trigger('reset')
}

const signInSuccess = function (data) {
  $('#signInMessage').text('Signed in successfully')
  $('#signInMessage').css('color', 'green')
  $('#signInButton').hide(200)
  $('#signUpButton').hide(200)
  $('#signedInButton').show(200)
  $('.section.welcome').hide(200)
  store.user = data.user
}

const signInFailure = function () {
  $('#signInMessage').text('Error on signing in')
  $('#signInMessage').css('color', 'red')
  $('#signInForm').trigger('reset')
}

const changePasswordSuccess = function () {
  $('#changePwdMessage').text('Changed password successfully')
  $('#changePwdMessage').css('color', 'green')
  $('#changePwdForm').trigger('reset')
}

const changePasswordFailure = function () {
  $('#changePwdMessage').text('Error on changing password')
  $('#changePwdMessage').css('color', 'red')
  $('#changePwdForm').trigger('reset')
}

const signOutSuccess = function () {
  $('form').trigger('reset')
  $('#signInMessage').text(' ')
  $('#changePwdMessage').text(' ')
  $('#signInButton').show(200)
  $('#signUpButton').show(200)
  $('#signedInButton').hide(200)
  $('#postsList').hide(200)
  $('.section.welcome').show(200)
  store.user = null
}

const signOutFailure = function () {
  $('#signOutMessage').text('Error on sign out. You might have to stay here forever.')
  $('#signOutMessage').css('color', 'red')
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
