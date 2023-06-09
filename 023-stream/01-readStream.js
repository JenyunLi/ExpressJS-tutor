const fs = require('fs');
// read stream

const readStream = fs.createReadStream('./1.txt', { encoding: 'utf8' });

readStream.on('data', (chunk) => {
  console.log('data: ', chunk);
});


readStream.on('end', () => {
  console.log('end');
})

readStream.on('error', (err) => {
  console.log('error: ', err);
})