const http = require('http');
const fs = require('fs');
const server = http.createServer((req,res) => {
    const url = req.url;
    const method = req.method;
    if(req.url === '/'){
        res.write('<html>');
        res.write('<head><title>Enter Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"></input></form></body>')
        res.write('</html>');
        return res.end();
    }
    if(url === '/message' && method === 'POST') {
        fs.writeFileSync('formMessage.txt', 'Hello this is the data coming from form');
        return res.end();
    }
})

server.listen(3000);