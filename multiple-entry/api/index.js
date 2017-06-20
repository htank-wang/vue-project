import $ from 'zepto'
// import './mock/course'
export default {
  getTaskList: function (callback) {
    $.get('/api/getTaskList', function (response) {
      response = JSON.parse(response)
      if (response.code === '0') {
        callback(response.singleResult)
      }
    })
  }
}
