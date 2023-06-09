const fs= require('fs');
fs.writeFile('./avatar/a.txt','你好', (err)=>{
  if (err && err.code === 'ENOENT') {
    console.log('文件不存在')
  } 
})