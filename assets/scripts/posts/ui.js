'use strict'

// TODO remove console.log after debugging!!!

const showPostsTemplate = require('../templates/posts.handlebars')
const postsList = $('.posts.section')
const postsMessage = $('.posts.section .message')
const postMessage = $('.create-post.section .message')

const onShowSuccess = (data) => {
  if (!data) {
    $(postsMessage).html('<p>No posts.<p>')
    $(postsList).html(' ')
  } else {
    const showPostsHtml = showPostsTemplate({ posts: data.posts })
    $(postsList).html(showPostsHtml)
  }
}

const onCreateSuccess = function () {
  $(postMessage).html('<p>Your post has been saved.</p>')
  $('#createPostForm').trigger('reset')
}

const onCreateFailure = function () {
  $(postMessage).html('<p>There was an error. Please try again.</p>')
}

module.exports = {
  onShowSuccess,
  onCreateSuccess,
  onCreateFailure,
  postMessage
}
