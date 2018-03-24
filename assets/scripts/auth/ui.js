'use strict'

const store = require('../store')

const showSignIn = function () {
  $('.sign-up').hide('slow')
  $('.sign-up-message.error').addClass('hidden')
  $('.sign-in').show('slow')
}

const signUpSuccess = function (data) {
  $('form').trigger('reset')
  showSignIn()
  $('.welcome-intro').addClass('hidden')
  $('.sign-up-message.success, .welcome-text .divider').removeClass('hidden')
  $('.sign-up-message.success').append('You have signed up successfully. Please sign in to continue.')
  store.user = data.user
}

const signUpFailure = function () {
  $('form').trigger('reset')
  $('.sign-up-message.success, .welcome-text .divider, .welcome-intro').addClass('hidden')
  $('.sign-up-message.error').removeClass('hidden')
  $('.sign-up-message.error').html(' ')
  $('.sign-up-message.error').append('There was an error. Please try again.')
}

const signInSuccess = function (data) {
  $('form').trigger('reset')
  $('#signedInButton').show('slow')
  $('.welcome-forms, .sign-in').hide('slow')
  $('.sign-in-message.error, .welcome-intro').addClass('hidden')
  $('.sign-in-message.success').removeClass('hidden')
  $('.sign-in-message.success').append('Create, edit, view and delete your posts.')
  store.user = data.user
}

const signInFailure = function () {
  $('form').trigger('reset')
  $('.sign-in-message.success, .welcome-text .divider, .welcome-intro').addClass('hidden')
  $('.sign-in-message.error').removeClass('hidden')
  $('.sign-in-message.error').html(' ')
  $('.sign-in-message.error').append('There was an error. Please try again.')
}

const changePasswordSuccess = function () {
  $('form').trigger('reset')
  $('.password-message.success').html(' ')
  $('.password-message.error').addClass('hidden')
  $('.password-message.success').removeClass('hidden')
  $('.password-message.success').append('Your new password has been saved.')
}

const changePasswordFailure = function () {
  $('form').trigger('reset')
  $('.password-message.success').addClass('hidden')
  $('.password-message.error').removeClass('hidden')
  $('.password-message.error').html(' ')
  $('.password-message.error').append('There was an error. Please try again.')
}

const signOutSuccess = function () {
  $('form').trigger('reset')
  $('.error, .success').html(' ')
  $('.sign-in-message.success').addClass('hidden')
  $('.welcome-intro').removeClass('hidden')
  $('.welcome-forms, .sign-up, #signInButton').show('slow')
  $('#signedInButton, #postsList').hide('slow')
  store.user = null
}

const signOutFailure = function () {
  $('form').trigger('reset')
  $('#signOutMessage').text('Error on sign out. You might have to stay here forever.')
  $('#signOutMessage').css('color', 'red')
}

module.exports = {
  showSignIn,
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
