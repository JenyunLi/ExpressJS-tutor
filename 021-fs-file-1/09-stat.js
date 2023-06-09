const fs = require('fs');

fs.stat('./avatar/1.txt', (err, data) => {
  if (!err) {
    console.log(data.isFile())
    console.log(data.isDirectory())
    console.log(data.size)
    console.log(data.birthtime)
    console.log(data.mtime)
  }
})