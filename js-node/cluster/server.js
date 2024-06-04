const http = require('http');

const requestHandler = (req, res) => {
    res.writeHead(200);
    res.end('Hello, Cluster!');
}

const server = http.createServer(requestHandler);

module.exports = server;