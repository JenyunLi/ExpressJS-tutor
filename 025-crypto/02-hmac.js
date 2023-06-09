const crypto= require('crypto');
const hash= crypto.createHmac('md5','secret-key');
hash.update('Hello World');
console.log(hash.digest('hex'));

const hmac= crypto.createHmac('sha256','secret-key');
hmac.update('Hello World');
console.log(hmac.digest('hex'))

