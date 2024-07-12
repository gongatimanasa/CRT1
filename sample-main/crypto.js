const crypto = require('crypto');
const hash = crypto.createHash('sha256');
hash.update('shaj1234');
console.log(hash.digest('hex'));
