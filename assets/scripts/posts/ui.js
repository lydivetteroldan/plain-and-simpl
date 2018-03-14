'use strict'

// TODO remove console.log after debugging!!!
const createPostMessage = $('.create-post.section .message')
const findPostMessage = $('#findPostMessage')
const editPostMessage = $('.edit-post .message')
const postsList = $('.posts.section')
const postsMessage = $('.posts.section .message')
const postMessage = $('.post.section .message')
const postSection = $('.post.section')
const showPostTemplate = require('../templates/post.handlebars')
const showPostsTemplate = require('../templates/posts.handlebars')
const showUpdatedPostTemplate = require('../templates/post.handlebars')

const onShowPostsSuccess = (data) => {
  const showPostsHtml = showPostsTemplate({ posts: data.posts })
  $('#deletePostMessage').empty()
  $(postsList).html(showPostsHtml)
}

const onShowPostsFailure = (data) => {
  $(postsMessage).html('<p>No posts.<p>')
  $(postsList).html(' ')
}

const onShowPostSuccess = (data) => {
  const showPostHtml = showPostTemplate({ post: data.post })
  $(postsList).empty()
  $(postSection).html(showPostHtml)
  $('#deletePostMessage').empty()
  $('#findPostForm').trigger('reset')
  if (data.post.editable !== false) {
    $('#editPostButton').show()
    $('#deletePostButton').show()
  } else {
    $('#editPostButton').hide()
    $('#deletePostButton').hide()
  }
}

const onShowPostFailure = () => {
  $(findPostMessage).html('The post could not be found.')
  $(postSection).html(' ')
}

const onCreateSuccess = function (data) {
  $(createPostMessage).html('<p>Your post has been saved.</p>')
  $('#createPostForm').trigger('reset')
  const showPostHtml = showPostTemplate({ post: data.post })
  $(postsList).empty()
  $(postSection).html(showPostHtml)
}

const onCreateFailure = function () {
  $(postMessage).html('<p>There was an error. Please try again.</p>')
}

const onUpdatePostSuccess = function (data) {
  const showUpdatedPostHtml = showUpdatedPostTemplate({ post: data.post })
  $(postsList).empty()
  $(postSection).html(showUpdatedPostHtml)
  $(editPostMessage).html('<p>Your post has been updated.</p>')
  $('#editPostForm').trigger('reset')
}

const onUpdatePostFailure = function () {
  $(postMessage).html('<p>There was an error. Please try again.</p>')
}

const onDeletePostSuccess = function () {
  console.log('deleted it')
  $('#deletePostButton').closest('.section.post > .row').hide(200).remove()
  $('#deletePostMessage').html('<p>Your post has been deleted.</p>')
}

const onDeletePostFailure = function () {
  $('#deletePostMessage').html('<p>There was an error. Your post was not deleted. Please try again. </p>')
}

module.exports = {
  onShowPostSuccess,
  onShowPostsSuccess,
  onShowPostsFailure,
  onShowPostFailure,
  onUpdatePostSuccess,
  onUpdatePostFailure,
  onCreateSuccess,
  onCreateFailure,
  onDeletePostSuccess,
  onDeletePostFailure,
  postMessage
}
