'use strict'

const config = require('../config')
const store = require('../store')

const create = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/posts',
    method: 'POST',
    headers: {
      contentType: 'application/json',
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}

const index = function () {
  return $.ajax({
    url: config.apiOrigin + '/posts',
    method: 'GET'
  })
}

module.exports = {
  create,
  index
}
