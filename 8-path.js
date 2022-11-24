const path = require('path')

console.log(path.sep)

const filePath = path.join('/content', 'folder', 'text.txt')

console.log(filePath)

const allpath = path.resolve(__dirname, 'content', 'folder', 'text.txt')

console.log(allpath)