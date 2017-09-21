//만들어진 작업을 수행한다.

const kue = require('kue')
const queue = kue.createQueue()

//수행할 작업 이름, 한번에 작업 개수
queue.process('my-job', 4,(job, done) => {
  console.log(job.data.message)//redis를 통해서 producer.js에서 넘어온다.
  done()
})
