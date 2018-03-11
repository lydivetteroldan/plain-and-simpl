'use strict'

// TODO remove console.log after debugging!!!

const onSuccess = function (data) {
  console.log('data is ', data)
  if (!data) {
    // TODO display error message for user
    console.warn('Either you deleted something, or something went wrong.')
  } else if (data.post) {
    console.log(data.post)
  } else {
    console.table(data.posts)
  }
}

const onError = function (response) {
  // TODO display error message for user
  console.error(response)
}

const onCreateSuccess = function () {
  $('#createPostSection').hide('slow')
}

module.exports = {
  onError,
  onSuccess,
  onCreateSuccess
}
