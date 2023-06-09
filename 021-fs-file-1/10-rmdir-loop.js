const fs = require('fs')

fs.readdir('./avatar', (err, data) => {
  if (err) {
    console.log(err);
    if (err.code === 'ENOENT')
      console.log('文件不存在')
    return;
  }
  // console.log(data);

  data.forEach(item => {
    fs.unlink(`./avatar/${item}`, (err) => {
      if (err) {
        console.log(err);
        if (err.code === 'ENOENT')
          console.log('文件不存在')
        return;
      }
    })
  })
  fs.rmdir('./avatar', (err) => {
    console.log(err);
  })
})
