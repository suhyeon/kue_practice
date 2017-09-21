//file-type을 이용한 파일형식 탐지
const fs = require('fs')// node 내장모듈
const fileType = require('file-type')

const buffer = fs.readFileSync('떡볶이.jpg')//동기식
//비동기식으로 코드하는 것이 더 좋다

console.log(fileType(buffer))
