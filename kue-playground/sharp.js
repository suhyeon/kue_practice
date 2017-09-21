const fs = require('fs')
const sharp = require('sharp')

const buffer = fs.readFileSync('gap.jpg')

sharp(buffer)
  .resize(200, 200)
  .crop(sharp.gravity.center)
  .toFile('output.jpg', (err, info) => {
    console.log(info)
  })
