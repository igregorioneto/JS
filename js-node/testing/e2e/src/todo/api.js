const http = require('http');

const routes = {
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