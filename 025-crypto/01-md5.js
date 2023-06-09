const crypto= require('crypto');
const hash= crypto.createHash('md5');
hash.update('Hello World');
console.log(hash.digest('hex'))
console.log(hash.digest('base64'))
