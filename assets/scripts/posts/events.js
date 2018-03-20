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
  api.show(post.id)
    .then(ui.onShowPostSuccess)
    .catch(ui.onShowPostFailure)
}

const onCreatePost = (event) => {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.create(data)
    .then(ui.onCreateSuccess)
    .catch(ui.onCreateFailure)
}

const onUpdatePost = function (event) {
  event.preventDefault()
  const data = getFormFields(event.target)
  api.update(data)
    .then(ui.onUpdatePostSuccess)
    .catch(ui.onUpdatePostFailure)
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
