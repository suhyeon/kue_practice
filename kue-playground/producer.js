//작업을 만든다.

const kue = require('kue')
const queue = kue.createQueue()

//job 수행을 위한 필요한 데이터를 생성

setInterval(() => {
  queue.create('my-job', {message: 'hello kue!'})
  .removeOnComplete(true)
  .save()
}, 1000)
