const { readFileSync, writeFileSync, write } = require('fs')

const first = readFileSync('./content/first.txt', 'utf8')
const second = readFileSync('./content/second.txt', 'utf8')

console.log(first, second)

writeFileSync('./content/write.txt', `write : ${first}, ${second}`)