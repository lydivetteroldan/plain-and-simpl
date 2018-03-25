'use strict'

const createPostMessage = $('.create-post.section .message')
const findPostMessage = $('.find-post .message')
const editPostMessage = $('.edit-post .message')
const postsList = $('.posts.section')
const postsMessage = $('.posts.section .message')
const postSection = $('.post.section')
const showPostTemplate = require('../templates/post.handlebars')
const showPostsTemplate = require('../templates/posts.handlebars')

$('.modal').on('hidden.bs.modal', function (e) {
  $('.message').html(' ')
  $('form').trigger('reset')
})

const onShowPostsSuccess = (data) => {
  const showPostsHtml = showPostsTemplate({ posts: data.posts })
  $(postsList).html(showPostsHtml)
  $(postSection).html(' ')
  $(postsMessage).html(' ')
}

const onShowPostsFailure = () => {
  $(postsMessage).html('<p>No posts found.<p>')
  $(postsList).html(' ')
  $(postSection).html(' ')
}

const onShowPostSuccess = (data) => {
  const showPostHtml = showPostTemplate({ post: data.post })
  $(postsList).html(' ')
  $(postsMessage).html(' ')
  $(findPostMessage).html(' ')
  $('#findPostForm').trigger('reset')
  $(postSection).html(showPostHtml)
  if (data.post.editable !== false) {
    $('#editPostButton').show()
    $('#deletePostButton').show()
  } else {
    $(postsMessage).html('<p>No posts found.<p>')
    $('#editPostButton').hide()
    $('#deletePostButton').hide()
  }
}

const onShowPostFailure = () => {
  $(findPostMessage).html('The post could not be found.')
  $(postsList).html(' ')
  $(postSection).html(' ')
}

const onCreateSuccess = function (data) {
  $(createPostMessage).html('<p>Your post has been saved.</p>')
  const showPostHtml = showPostTemplate({ post: data.post })
  $(postsList).html(' ')
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
  const showPostHtml = showPostTemplate({ post: data.post })
  $(postsList).html(' ')
  $(postsMessage).html(' ')
  $(postSection).html(showPostHtml)
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
  $(postSection).html(' ')
  $(postsList).append('<p class="message">Your post has been deleted.</p>')
}

const onDeletePostFailure = function () {
  $(postsList).append('<p class="message">There was an error. Please try again. </p>')
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
