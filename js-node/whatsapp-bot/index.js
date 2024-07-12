const qrcode = require('qrcode-terminal');
const { Client, LocalAuth, NoAuth } = require('whatsapp-web.js');

const wwebVersion = '2.2407.3';

const client = new Client({
    authStrategy: new LocalAuth(), // your authstrategy here
    puppeteer: {
        headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'],
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

client.on('ready', async () => {
    console.log('Cliente está pronto!');
    getChat();
});

client.on('message', (message) => {
    displayMessage(message.fromMe ? 'Eu' : message.from, message.body);
    if (message.body.startsWith('!ping')) {
        message.reply('pong');
        client.sendMessage(message.from, 'Olá!');
    }
});

// Função para formatar e exibir mensagens
function displayMessage(chatName, messageBody) {
    console.log(`[${chatName}] ${messageBody}`);
}

async function getChat() {
    // Obtendo todas as conversas
    const chats = await client.getChats();

    for (const chat of chats) {
        console.log(`Carregando mensagens da conversa: ${chat.name}`);

        // Obtendo mensagens da conversa
        const messages = await chat.fetchMessages({ limit: 100 }); // Limite de mensagens por vez

        for (const message of messages) {
            displayMessage(`[${chat.name}] ${message.body}`);
        }
    }
}

client.initialize();