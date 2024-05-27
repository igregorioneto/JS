const http = require('http');

const todos = [];

const routes = {
    "/todos:get": (request, response) => {
        response.writeHead(200, { 'Content-Type': 'application/json' })
        response.end(JSON.stringify(todos));
    },
    "/todos:post": async (request, response) => {
        let body = '';
        for await (const chunk of request) {
            body += chunk;
        }
        const todo = JSON.parse(body);
        todo.id = 1;
        todos.push(todo);
        response.writeHead(201, { 'Content-Type': 'application/json' })
        response.end(JSON.stringify(todo));
    },
    "/todos?id=1:get": async (request, response) => {
        const { id } = request.params;
        const todo = todos.find(t => t.id === id);
        response.writeHead(200), { 'Content-Type': 'application/json' }
        response.end(JSON.stringify(todo))
    },
    default: (request, response) => {
        response.write('Hello World!');
        return response.end();
    }
}

const handler = (request, response) => {
    const { url, method } = request;
    const routeKey = `${url}:${method.toLowerCase()}`;
    const chosen = routes[routeKey] || routes.default;

    return chosen(request, response);
}

const app = http
    .createServer(handler)
    .listen(3000, () => console.log('app runnint at', 3000));

module.exports = app;