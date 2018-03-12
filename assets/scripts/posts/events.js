'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const showPosts = () => {
  api.index()
    .then(ui.onShowSuccess)
    .catch(ui.onError)
}

const onCreatePost = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  if (data.post.title === '' || data.post.date === '' || data.post.content === '') {
    $(ui.postMessage).html('<p>Please make sure there are no empty fields and try again.</p>')
    return false
  }
  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onError)
}

const eventHandlers = () => {
  $('#createPostForm').on('submit', onCreatePost)
}

module.exports = {
  eventHandlers,
  showPosts
}
