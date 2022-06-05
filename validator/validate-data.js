const validator = require('validator')

console.log('Is email valid ? '+validator.isEmail('dummy@gmail'))
console.log('Is email valid ? '+validator.isEmail('dummy@gmail.com'))

console.log('Is URL valid ? '+validator.isURL('www.google.com'))
