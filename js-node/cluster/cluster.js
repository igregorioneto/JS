const cluster = require('cluster');
const os = require('os');
const server = require('./server');

const numCPUs = os.cpus().length;
const totalRequests = { count: 0 };

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running.`);

    for (let i = 0; i < numCPUs; i++) {
        const worker = cluster.fork();        
        worker.requests = 0;
    }

    cluster.on('fork', (worker) => {
        console.log(`Forked worker with PID: ${worker.process.pid}`);
    })

    cluster.on('online', (worker) => {
        console.log(`Worker ${worker.process.pid} is online`);
    })

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} finish with code: ${code}, ans signal: ${signal}`);
        console.log('Starting a new worker');
        const newWorker = cluster.fork();
        newWorker.requests = 0;
    });

    cluster.on('message', (worker, message) => {
        if (message.type === 'request') {
            worker.requests += 1;
            totalRequests.count += 1;
        }
    })
} else {
    server.listen(3000, () => {
        console.log(`Worker ${process.pid} started.`);
    });

    server.on('request', (req, res) => {
        process.send({ type: 'request' });
    })
}