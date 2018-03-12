'use strict'

// TODO remove console.log after debugging!!!
const createPostMessage = $('.create-post.section .message')
const findPostMessage = $('#findPostMessage')
const postsList = $('.posts.section')
const postsMessage = $('.posts.section .message')
const postMessage = $('.post.section .message')
const postSection = $('.post.section')
const showPostTemplate = require('../templates/post.handlebars')
const showPostsTemplate = require('../templates/posts.handlebars')

const onShowPostsSuccess = (data) => {
  const showPostsHtml = showPostsTemplate({ posts: data.posts })
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
  $('#findPostForm').trigger('reset')
  if (data.post.editable !== false) {
    $('#editPostButton').show()
  } else {
    $('#editPostButton').hide()
  }
}

const onShowPostFailure = () => {
  $(findPostMessage).html('The post could not be found.')
  $(postSection).html(' ')
}

const onCreateSuccess = function () {
  $(createPostMessage).html('<p>Your post has been saved.</p>')
  $('#createPostForm').trigger('reset')
}

const onCreateFailure = function () {
  $(postMessage).html('<p>There was an error. Please try again.</p>')
}

module.exports = {
  onShowPostSuccess,
  onShowPostsSuccess,
  onShowPostsFailure,
  onShowPostFailure,
  onCreateSuccess,
  onCreateFailure,
  postMessage
}
