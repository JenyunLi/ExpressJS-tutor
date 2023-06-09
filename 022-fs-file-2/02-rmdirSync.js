const fs = require('fs');

fs.readdir('./avatar', (err, data) => {
  data.forEach(item => {
    fs.unlinkSync('./avatar/' + item)
  })
    
  fs.rmdir('./avatar', (err) => {
    if (err) {
      console.log(err);
      if (err.code === 'ENOENT')
        console.log('文件不存在')
    }
  })
})
