const http = require('http');
const url = require('url');

const todos = [];

const routes = {
    "/todos:get": (request, response) => {
        const queryObject = url.parse(request.url, true).query;
        if (queryObject.id) {
            const todo = todos.find(t => t.id === parseInt(queryObject.id));
            if (todo) {
                response.writeHead(200, { 'Content-Type': 'application/json' })
                response.end(JSON.stringify(todo));
            } else {
                response.writeHead(404, { 'Content-Type': 'application/json' })
                response.end(JSON.stringify({ error: 'Todo not found' }));
            }
        } else {
            response.writeHead(200, { 'Content-Type': 'application/json' })
            response.end(JSON.stringify(todos));
        }        
    },
    "/todos:post": async (request, response) => {
        let body = '';
        for await (const chunk of request) {
            body += chunk;
        }
        const todo = JSON.parse(body);
        todo.id = todos.length + 1;
        todos.push(todo);
        response.writeHead(201, { 'Content-Type': 'application/json' })
        response.end(JSON.stringify(todo));
    },
    "/todos:put": async (request, response) => {
        const queryObject = url.parse(request.url, true).query;
        if (queryObject.id) {
            const todo = todos.find(t => t.id === parseInt(queryObject.id));
            if (todo) {
                let body = '';
                for await (const chunk of request) {
                    body += chunk;
                }
                const todoUpdated = JSON.parse(body);
                todo.title = todoUpdated.title;
                todo.status = todoUpdated.status;

                response.writeHead(200, { 'Content-Type': 'application/json' })
                response.end(JSON.stringify(todo));
            } else {
                // Tratar o erro caso não tenha todo - 404
                response.writeHead(404, { 'Content-Type': 'application/json' })
                response.end(JSON.stringify({ error: 'Not Found' }))
            }            
        } else {
            // Tratar erro caso não tenha id como query param - 400
            response.writeHead(400, { 'Content-Type': 'application/json' });
            response.end(JSON.stringify({ error: 'Bad Request' }))
        }        
    },
    "/todos:delete": async (request, response) => {
        const queryObject = url.parse(request.url, true).query;
        if (queryObject.id) {
            const index = todos.findIndex(t => t.id === parseInt(queryObject.id));
            if (index !== -1) {
                todos.splice(index, 1);                
                response.writeHead(204)
                response.end()
            } else {
                response.writeHead(404, { 'Content-Type': 'application/json' })
                response.end(JSON.stringify({ error: 'Not Found' }))
            }   
        } else {
            response.writeHead(400, { 'Content-Type': 'application/json' })
            response.end(JSON.stringify({ error: 'Bad Request' }))
        }
    },
    default: (request, response) => {
        response.write('Hello World!');
        return response.end();
    }
}

const handler = (request, response) => {
    const { url, method } = request;
    const routeKey = `${url.split('?')[0]}:${method.toLowerCase()}`;
    const chosen = routes[routeKey] || routes.default;

    return chosen(request, response);
}

const app = http
    .createServer(handler)
    .listen(3000, () => console.log('app runnint at', 3000));

module.exports = app;