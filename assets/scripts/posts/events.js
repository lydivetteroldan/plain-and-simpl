'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

const onShowPosts = (event) => {
  event.preventDefault()
  api.index()
    .then(ui.onShowPostsSuccess)
    .catch(ui.onShowPostsFailure)
}

const onShowPost = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const post = data.post
  if (post.id.length !== 0) {
    api.show(post.id)
      .then(ui.onShowPostSuccess)
      .catch(ui.onShowPostFailure)
  } else {
    console.log('Please provide a post id!')
  }
}

const onCreatePost = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  const post = data.post
  if (post.title === '' || post.date === '' || post.content === '') {
    $(ui.postMessage).html('<p>Please make sure there are no empty fields and try again.</p>')
    return false
  }
  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const eventHandlers = () => {
  $('#createPostForm').on('submit', onCreatePost)
  $('#postsSearch').on('submit', onShowPosts)
  $('#findPostForm').on('submit', onShowPost)
}

module.exports = {
  eventHandlers
}
