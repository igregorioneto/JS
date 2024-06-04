const cluster = require('cluster');
const os = require('os');
const server = require('./server');

const numCPUs = os.cpus().length;

if (cluster.isMaster) {
    console.log(`Master ${process.pid} is running.`);

    for (let i = 0; i < numCPUs; i++) {
        cluster.fork();        
    }

    cluster.on('fork', (worker) => {
        console.log(`Forked worker with PID: ${worker.process.pid}`);
    })

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.pid} finish.`);
    });
} else {
    server.listen(3000, () => {
        console.log(`Worker ${process.pid} started.`)
    })
}