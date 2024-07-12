const makeWASocket = require('@whiskeysockets/baileys').default;
const { DisconnectReason, useMultiFileAuthState, fetchLatestBaileysVersion } = require('@whiskeysockets/baileys');

async function connectToWhatsApp() {
    try {
        const { state, saveCreds } = await useMultiFileAuthState('baileys_auth_info');

        const { version, isLatest } = await fetchLatestBaileysVersion();
        console.log(`Using WA v${version.join('.')}, isLatest: ${isLatest}`);

        const sock = makeWASocket({
            printQRInTerminal: true,
            auth: {
                creds: state.creds,
                keys: state.keys,
            },
        });

        sock.ev.on('connection.update', (update) => {
            const { connection, lastDisconnect } = update;
            if (connection === 'close') {
                const shouldReconnect = (lastDisconnect.error instanceof Error) && lastDisconnect.error.message !== DisconnectReason.loggedOut;
                console.log('connection closed due to ', lastDisconnect.error, ', reconnecting ', shouldReconnect);
                if (shouldReconnect) {
                    connectToWhatsApp();
                }
            } else if (connection === 'open') {
                console.log('opened connection');
            }
        });

        sock.ev.on('messages.upsert', async (m) => {
            console.log('Message received:', m);
        });

        client.on('message', (message) => {
            console.log(message.body)
            if (message.body.startsWith('!ping')) {
                message.reply('pong');
                // Enviar mensagem diretamente para o mesmo remetente
                client.sendMessage(message.from, 'Esta é uma resposta direta!');
            }
        });

    } catch (error) {
        console.error('Error connecting to WhatsApp:', error);
    }
}

connectToWhatsApp();

