'use strict'

const setAPIOrigin = require('../../lib/set-api-origin')
const config = require('./config')
const authEvents = require('./auth/events')
const postEvents = require('./posts/events')
const signedInSettings = $('#signedInButton')

function notSignedIn () {
  $(signedInSettings).hide()
}

notSignedIn()

$(() => {
  setAPIOrigin(location, config)
  authEvents.eventHandlers()
  postEvents.eventHandlers()
})
