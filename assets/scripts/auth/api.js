'use strict'

const config = require('../config')
const store = require('../store')

// signUp
const signUp = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-up',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data: data
  })
}

// signIn
const signIn = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/sign-in',
    method: 'POST',
    headers: {
      contentType: 'application/json'
    },
    data: data
  })
}

module.exports = {
  signUp,
  signIn
}
