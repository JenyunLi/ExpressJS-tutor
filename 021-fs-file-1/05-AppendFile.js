const fs= require('fs');
fs.appendFile('./avatar/a.txt','\nhello world', (err)=>{
  if (err && err.code === 'ENOENT') {
    console.log('文件不存在')
  } 
})