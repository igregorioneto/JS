const EventEmitter = require('events')
const fs = require('fs')
const http = require('http')
const { Writable } = require('stream')

class Logger extends EventEmitter {
    log (message) {
        this.emit('log', message)
    }    
}

class LoggerStream extends Writable {
    constructor(options) {
        super(options)        
        this.fileStream = fs.createWriteStream('./log.txt', { flags: 'a' })
        this.readStream = fs.createReadStream('./log.txt', 'utf8');
    }

    read() {
        this.readStream.on('data', (chunk) => {
            console.log('Chunk recebido', chunk);
        })
    }

    write(value, encoding, callback) {        
        this.fileStream.write(value, encoding, callback)
    }
}

;(() => {
    const logger = new Logger()
    const loggerStream = new LoggerStream()

    // Adicionando um listener para o evento 'log'
    logger.on('log', (message) => {
        const buffer = Buffer.from(message + '\n', 'utf8')
        loggerStream.write(buffer)
    })

    const server = http.createServer((req, res) => {
        const logMessage = `Requisição recebida: ${req.method} ${req.url} em ${new Date().toString()}`
        logger.log(logMessage)

        res.writeHead(200, { 'Content-Type': 'text/plain' })
        res.end('Olá, Mundo\n')
    })

    server.listen(3000, () => {
        console.log(`Servidor rodando na porta 3000`)
    })
})()