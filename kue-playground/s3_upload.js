const fs = require('fs')
const aws = require('aws-sdk') //access-id, secrete-key를 설정해놨다면 알아서 불러온다.
//aws-cli와 맞물려서 작동한다.
const s3 = new aws.S3({
  apiVersion: '2006-03-01'
})

const buffer = fs.readFileSync('food.jpg') // 업로드 할 파일

s3.upload({
  ACL: 'public-read', // 익명의 사용자도 파일 경로만 알면 읽기 가능하도록 설정(파일의 권한을 어디까지 설정할 것인지)
  //링크를 공유하려면 public으로 설정해야 한다.
  Body: buffer,
  Bucket: 'suhyeon-web-practice',
  Key: 'food.jpg', //파일이름

  //http 응답헤더
  ContentDisposition: 'inline', // Content-Disposition 헤더(웹에서 어떤 파일은 브라우저에서 바로 볼 수 있던지, 다운로드창이 뜰 것인지등의 설정하는 헤더)
  ContentType: 'jpg' // Content-Type 헤더
}, (err, data) => {
  console.log(data.Location)
})
