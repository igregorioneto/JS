const qrcode = require('qrcode-terminal');
const { Client, LocalAuth, NoAuth } = require('whatsapp-web.js');

const wwebVersion = '2.2407.3';

const client = new Client({
    authStrategy: new LocalAuth(), // your authstrategy here
    puppeteer: {
      headless: true , args: ['--no-sandbox', '--disable-setuid-sandbox'],
    },
    webVersionCache: {
        type: 'remote',
        remotePath: `https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/${wwebVersion}.html`,
    },
});

client.on('qr', (qr) => {
    console.log('QR Code gerado. Escaneie o código abaixo com o WhatsApp:');
    qrcode.generate(qr, { small: true });
});

client.on('message_create', message => {
    console.log(message.body);
});

client.on('ready', () => {
    console.log('Cliente está pronto!');
});

client.on('message', (message) => {
    console.log(message.body)
    if (message.body.startsWith('!ping')) {
        message.reply('pong');
        client.sendMessage(message.from, 'Olá!');
    }
});

client.initialize();