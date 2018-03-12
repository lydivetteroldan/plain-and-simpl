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

const show = function (id) {
  return $.ajax({
    url: config.apiOrigin + '/posts/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

const update = function (data) {
  return $.ajax({
    url: config.apiOrigin + '/posts/' + data.post.id,
    method: 'PATCH',
    data
  })
}

module.exports = {
  create,
  index,
  show,
  update
}
