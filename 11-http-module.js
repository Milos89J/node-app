const http = require('http');

const server = http.createServer((req, res) =>{
if(req.url === '/') {
    res.end('Welcome')
} 
if(req.url === '/about') {
    res.end('history')
}
res.end(`
<h1> Error </h1>
`)
})

server.listen(5000)