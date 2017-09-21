const express = require('express')
const multer = require('multer')
const sharp = require('sharp')

//const fs = require('fs')
//const buffer = fs.readFileSync('gap.jpg')

const app = express()
const upload = multer()
app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index.ejs')
})

app.post('/', upload.single('photo'), (req, res) => {
  sharp(req.file.buffer)
    .resize(200, 200)
    .crop(sharp.gravity.center)
    .toFile('output2.jpg', (err, info) => {
      console.log(info)
      res.redirect('/')
    })
})

app.listen(3000, () =>{
  console.log('listen')
})
