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

const onUpdatePost = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  const post = data.post
  if (post.title === '' || post.date === '' || post.content === '') {
    $(ui.editPostMessage).html('<p>All fields are required. Please make sure you entered the correct ID and try again.</p>')
    return false
  }
  if (post.id.length !== 0) {
    api.update(data)
      .then(ui.onUpdatePostSuccess)
      .catch(ui.onUpdatePostFailure)
  } else {
    $(ui.editPostMessage).html('<p>All fields are required. Please make sure you entered the correct ID and try again.</p>')
  }
}

const onDeletePost = (event) => {
  event.preventDefault()
  const id = event.target.dataset.id
  api.destroy(id)
    .then(ui.onDeletePostSuccess)
    .catch(ui.onDeletePostFailure)
}

const eventHandlers = () => {
  $('#createPostForm').on('submit', onCreatePost)
  $('#postsSearch').on('submit', onShowPosts)
  $('#findPostForm').on('submit', onShowPost)
  $('#editPostForm').on('submit', onUpdatePost)
  $('.post').on('click', '#deletePostButton', onDeletePost)
}

module.exports = {
  eventHandlers
}
