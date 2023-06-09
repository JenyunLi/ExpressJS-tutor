const http = require('http');
const fs = require('fs')
const zlib = require('zlib')
const gzip = zlib.createGzip()

http.createServer((req, res) => {
  // res 可写流
  const readStream = fs.createReadStream('./index.js');
  res.writeHead(200, {
    "content-type": "application/x-javascript;charset=utf-8",
    "content-encoding": "gzip"
  })
  readStream.pipe(gzip).pipe(res);
}).listen(3000, () => {
  console.log('server start');
})