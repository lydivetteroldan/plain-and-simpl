'use strict'

const postsApi = require('./api.js')
const postsUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onCreatePost = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (data.post.title === '' || data.post.date === '' || data.post.content === '') {
    return false
  }
  postsApi.create(data)
    .then(postsUi.onCreateSuccess)
    .catch(postsUi.onError)
}

const eventHandlers = () => {
  $('#createPostForm').on('submit', onCreatePost)
}

module.exports = {
  eventHandlers
}
