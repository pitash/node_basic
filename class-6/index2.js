const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.write('<html><head><title>Form</title></head>');
        res.write(
            '<body><form method="post" action="/process"><input name="message" /></form></body>'
        );
        res.end();
    } else if (req.url === '/process' && req.method === 'POST') {
        req.on('data', (chunk) => {
            console.log(chunk.toString());
        });
        res.write('Thank you for submitting');
        res.end();
    } else {
        res.write('Not found');
        res.end();
    }
});

server.listen(3000);

console.log('listening on port 3000');