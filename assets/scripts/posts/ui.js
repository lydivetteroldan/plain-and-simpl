'use strict'

// TODO remove console.log after debugging!!!
const createPostMessage = $('.create-post.section .message')
const findPostMessage = $('.find-post .message')
const editPostMessage = $('.edit-post .message')
const postsList = $('.posts.section')
const postsMessage = $('.posts.section .message')
const postSection = $('.post.section')
const showPostTemplate = require('../templates/post.handlebars')
const showPostsTemplate = require('../templates/posts.handlebars')
const showUpdatedPostTemplate = require('../templates/post.handlebars')

const onShowPostsSuccess = (data) => {
  const showPostsHtml = showPostsTemplate({ posts: data.posts })
  $('#deletePostMessage').empty()
  $(postsList).html(showPostsHtml)
  $(postsMessage).html(' ')
}

const onShowPostsFailure = () => {
  $(postsMessage).html('<p>No posts found.<p>')
  $(postsList).html(' ')
}

const onShowPostSuccess = (data) => {
  const showPostHtml = showPostTemplate({ post: data.post })
  $(postsList).empty()
  $(postsMessage).html(' ')
  $(postSection).html(showPostHtml)
  $(findPostMessage).html(' ')
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
  const showPostHtml = showPostTemplate({ post: data.post })
  $(postsList).empty()
  $(postsMessage).html(' ')
  $(postSection).html(showPostHtml)
  $('#createPostModal').on('hidden.bs.modal', function (e) {
    $(createPostMessage).html(' ')
  })
  $('#createPostForm').trigger('reset')
}

const onCreateFailure = function () {
  $(createPostMessage).html('<p>There was an error. Please try again.</p>')
}

const onUpdatePostSuccess = function (data) {
  const showUpdatedPostHtml = showUpdatedPostTemplate({ post: data.post })
  $(postsList).empty()
  $(postsMessage).html(' ')
  $(postSection).html(showUpdatedPostHtml)
  $(editPostMessage).html('<p>Your post has been updated.</p>')
  $('#editPostModal').on('hidden.bs.modal', function (e) {
    $(editPostMessage).html(' ')
    $('#editPostForm').trigger('reset')
  })
  $('#editPostForm').trigger('reset')
}

const onUpdatePostFailure = function () {
  $(editPostMessage).html('<p>There was an error. Please try again.</p>')
  $('#editPostModal').on('hidden.bs.modal', function (e) {
    $(editPostMessage).html(' ')
    $('#editPostForm').trigger('reset')
  })
}

const onDeletePostSuccess = function () {
  $('#deletePostButton').closest('.section.post > .row').hide(200).remove()
  $('#deletePostMessage').html('<p>Your post has been deleted.</p>')
  $(postsMessage).html(' ')
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
