'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')

const authEvents = require('./auth/events')
const postEvents = require('./posts/events')

function notSignedIn () {
  $('.sign-in, #signedInButton').hide()
}

notSignedIn()

$(() => {
  setAPIOrigin(location, config)
})

$(() => {
  authEvents.eventHandlers()
  postEvents.eventHandlers()
})
