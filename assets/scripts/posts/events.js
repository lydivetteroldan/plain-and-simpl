'use strict'

const postsApi = require('./api.js')
const postsUi = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onGetPosts = function () {
  postsApi.index()
    .then(postsUi.onSuccess)
    .catch(postsUi.onError)
}

const onCreatePost = function (event) {
  event.preventDefault()
  const data = getFormFields(this)
  if (data.post.title === '' || data.post.date === '' || data.post.content === '') {
    // TODO display error message for user if at least one field is blank
    return false
  }
  postsApi.create(data)
    .then(postsUi.onCreateSuccess)
    .then(onGetPosts)
    .catch(postsUi.onError)
}

const eventHandlers = () => {
  $('#createPostForm').on('submit', onCreatePost)
}

module.exports = {
  eventHandlers
}
