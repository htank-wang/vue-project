var Mock = require('mockjs')
/* eslint-disable*/
Mock.mock(/api\/getTaskList/, function () {
  return {
    "message": null,
    "code": "0",
    "singleResult": {
      "total": 1,
      "list": [{
        "id": 122,
        "name": "task1",
        "description": "task2",
        "user": "hank",
        "createTime": "2017-06-19"
      },
        {
          "id": 123,
          "name": "task1",
          "description": "task2",
          "user": "hank",
          "createTime": "2017-06-19"
        },
        {
          "id": 124,
          "name": "task1",
          "description": "task2",
          "user": "hank",
          "createTime": "2017-06-19"
        }, {
          "id": 125,
          "name": "task1",
          "description": "task2",
          "user": "hank",
          "createTime": "2017-06-19"
        }],
      "statInfo": null
    }
  }
})
