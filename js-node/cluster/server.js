const http = require('http');

let requestCount = 0;

const requestHandler = (req, res) => {
    requestCount++;
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({
        workerPDI: process.pid,
        workerRequests: requestCount
    }));
}

const server = http.createServer(requestHandler);

module.exports = server;