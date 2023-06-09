const fs= require('fs')
const readStream= fs.createReadStream('./1.txt')
const writeStream= fs.createWriteStream('./2.txt')
readStream.pipe(writeStream)

// on Data
readStream.on('data',(chunk)=>{
  console.log(chunk.toString())
})

// on End
readStream.on('end',()=>{
  console.log('end');
})

// on Error
readStream.on('error',(err)=>{
  console.log(err);
})