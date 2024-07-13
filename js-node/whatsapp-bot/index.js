const qrcode = require('qrcode-terminal');
const { Client, LocalAuth, NoAuth } = require('whatsapp-web.js');

// Função do QR Code
function generateQRCode(client) {
    client.on('qr', (qr) => {
        console.log('QR Code gerado. Escaneie o código abaixo com o WhatsApp:');
        qrcode.generate(qr, { small: true });
    });    
}
// Função para gerar as mensagens
function generateMessage(client) {
    client.on('message_create', message => {
        console.log(message.body);
    });
}
// Função para gerar as mensagens ao iniciar
function readMessage(client) {
    client.on('ready', async () => {
        console.log('Cliente está pronto!');
        getChat();
    });
}
// Função para enviar mensagem
function sendMessage(client) {
    client.on('message', (message) => {
        displayMessage(message.fromMe ? 'Eu' : message.from, message.body);
        chatBotMessage(client, message);
    });
}
// Função chatbot
function chatBotMessage(client, message) {
    if (message.body.startsWith('!ping')) {
        message.reply('pong');
        client.sendMessage(message.from, 'Olá!');
        return;
    }
    if (helloPeople(message)) {
        let replyMessage = 'Olá, tudo bem? Diga em poucas palavras em que posso te ajudar: ';
        message.reply(replyMessage);
        client.sendMessage(message.to, replyMessage);
        return;
    }
}
function helloPeople(message) {
    const hello = ['oi', 'olá', 'ola', 'bom dia', 'boa tarde', 'boa noite'];
    const existsMessageHello = hello.some(phase => message.includes(phase));
    if (existsMessageHello)
        return true;
    return false;
}
// Função para formatar e exibir mensagens
function displayMessage(chatName, messageBody) {
    console.log(`[${chatName}] ${messageBody}`);
}
// Função para listar as conversas com limit
async function getChat(client) {
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

;(() => {
    const wwebVersion = '2.2407.3';
    const client = new Client({
        authStrategy: new LocalAuth(), // your authstrategy here
        puppeteer: {
            headless: true, args: ['--no-sandbox', '--disable-setuid-sandbox'],
        },
        /*Para poder utilizar versão de QR Code web, porém esta funcionando normalmente sem esta dependência
        webVersionCache: {
            type: 'remote',
            remotePath: `https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/${wwebVersion}.html`,
        },*/
    });
    client.initialize();
    generateQRCode(client);
    generateMessage(client);
    readMessage(client);
    sendMessage(client);
})();