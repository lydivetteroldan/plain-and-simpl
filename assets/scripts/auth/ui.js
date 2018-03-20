'use strict'

const store = require('../store')

const signUpSuccess = function (data) {
  $('form').trigger('reset')
  $('#signUpMessage').text('Signed up successfully')
  $('#signUpMessage').css('color', 'green')
  $('#signUpButton').hide(200)
  store.user = data.user
}

const signUpFailure = function () {
  $('form').trigger('reset')
  $('#signUpMessage').text('Error on signing up')
  $('#signUpMessage').css('color', 'red')
}

const signInSuccess = function (data) {
  $('form').trigger('reset')
  $('#signInMessage').text('Signed in successfully')
  $('#signInMessage').css('color', 'green')
  $('#signInButton').hide(200)
  $('#signUpButton').hide(200)
  $('#signedInButton').show(200)
  $('.section.welcome').hide(200)
  store.user = data.user
}

const signInFailure = function () {
  $('form').trigger('reset')
  $('#signInMessage').text('Error on signing in')
  $('#signInMessage').css('color', 'red')
}

const changePasswordSuccess = function () {
  $('form').trigger('reset')
  $('#changePwdMessage').text('Changed password successfully')
  $('#changePwdMessage').css('color', 'green')
}

const changePasswordFailure = function () {
  $('form').trigger('reset')
  $('#changePwdMessage').text('Error on changing password')
  $('#changePwdMessage').css('color', 'red')
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
  $('form').trigger('reset')
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
