const http = require('http');
const url = require('url');

const items = [];

const server = http.createServer((req, res) => {
    const parsedUrl = url.parse(req.url, true);
    const method = req.method;
    const pathname = parsedUrl.pathname;

    if (pathname === '/items' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(items));
    } else if (pathname === '/item' && method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const parsedBody = JSON.parse(body);
            if (parsedBody.name) {
                const newItem = {
                    id: items.length + 1,
                    name: parsedBody.name
                };
                items.push(newItem);
                res.writeHead(201, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(newItem));
            } else {
                res.writeHead(400, { 'Content-Type': 'text/plain' });
                res.end('Name is required');
            }
        });
    } else if (pathname.startsWith('/item/') && method === 'PUT') {
        const id = parseInt(pathname.split('/')[2]);
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const parsedBody = JSON.parse(body);
            const item = items.find(i => i.id === id);
            if (item) {
                item.name = parsedBody.name || item.name;
                res.writeHead(200, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify(item));
            } else {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Item not found');
            }
        });
    } else if (pathname.startsWith('/item/') && method === 'DELETE') {
        const id = parseInt(pathname.split('/')[2]);
        const index = items.findIndex(i => i.id === id);
        if (index !== -1) {
            items.splice(index, 1);
            res.writeHead(204);
            res.end();
        } else {
            res.writeHead(404, { 'Content-Type': 'text/plain' });
            res.end('Item not found');
        }
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Not Found');
    }
});

server.listen(3000, () => {
    console.log('Server running at http://localhost:3000/');
});