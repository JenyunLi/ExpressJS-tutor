const fs= require('fs');
fs.rmdir('./avatar', (err)=>{
  if (err ) {
    console.log(err);
    if (err.code === 'ENOENT')
      console.log('文件不存在')
  } 
})