const EventEmitter = require('events')
const fs = require('fs')
const http = require('http')
const url = require('url')
const { Writable } = require('stream')

class Logger extends EventEmitter {
    log(message) {
        this.emit('log', message)
    }

    logInfo(message) {
        this.emit('logInfo', message)
    }

    logWarn(message) {
        this.emit('logWarn', message)
    }

    logError(message) {
        this.emit('logError', message)
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

; (() => {
    const logger = new Logger()
    const loggerStream = new LoggerStream()

    // Adicionando um listener para o evento 'log'
    logger.on('log', (message) => {
        const buffer = Buffer.from(message + '\n', 'utf8')
        loggerStream.write(buffer)
    })

    logger.on('logInfo', (message) => {
        const buffer = Buffer.from('INFO: ' + message + '\n', 'utf8')
        loggerStream.write(buffer)
    })

    logger.on('logWarn', (message) => {
        const buffer = Buffer.from('WARN: ' + message + '\n', 'utf8')
        loggerStream.write(buffer)
    })

    logger.on('logError', (message) => {
        const buffer = Buffer.from('ERROR: ' + message + '\n', 'utf8')
        loggerStream.write(buffer)
    })

    const server = http.createServer((req, res) => {
        const parseUrl = url.parse(req.url, true)
        const { filter } = parseUrl.query;
        const logMessage = `Requisição recebida: ${req.method} ${req.url} em ${new Date().toString()}`
        try {         
            if (filter === undefined) {
                logger.logWarn(logMessage)
            } else {
                logger.logInfo(logMessage)
            }

            res.writeHead(200, { 'Content-Type': 'text/plain' })            
            res.end('Olá, Mundo\n')
        } catch (error) {
            logger.logError(logMessage + error)
        }
    })

    server.listen(3000, () => {
        console.log(`Servidor rodando na porta 3000`)
    })
})()