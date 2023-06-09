const fs = require('fs');
// write stream
const writeStream = fs.createWriteStream('./myFile.txt', 'UTF-8');

writeStream.write('hello ');
writeStream.write('world\n');
writeStream.write('111111\n');
writeStream.write('222222\n');
writeStream.write('333333\n');

writeStream.end();


// readStream.on('data', (chunk) => {
//   console.log('data: ', chunk);
// });


// readStream.on('end', () => {
//   console.log('end');
// })

// readStream.on('error', (err) => {
//   console.log('error: ', err);
// })