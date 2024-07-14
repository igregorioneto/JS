import { Injectable, OnModuleInit } from '@nestjs/common';
import { Client, LocalAuth } from 'whatsapp-web.js';
import * as qrcode from 'qrcode-terminal';

@Injectable()
export class WhatsappService implements OnModuleInit {
  private client: Client;

  onModuleInit() {
    this.initializeClient();
  }

  initializeClient() {
    const wwebVersion = '2.2407.3';

    this.client = new Client({
      authStrategy: new LocalAuth(),
      puppeteer: {
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox'],
      },
      webVersionCache: {
        type: 'remote',
        remotePath: `https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/${wwebVersion}.html`,
      }
    });

    this.client.on('qr', (qr) => {
      console.log('QR Code gerado. Escaneie o código abaixo com o WhatsApp:');
      qrcode.generate(qr, { small: true });
    });

    this.client.on('ready', async () => {
      console.log('Cliente está pronto!');
      await this.getChats();
    });

    this.client.on('message_create', (message) => {
      console.log(message.body);
    });

    this.client.on('message', (message) => {
      this.displayMessage(message.fromMe ? 'Eu' : message.from, message.body);
      this.chatBotMessage(message);
    });

    this.client.initialize();
  }

  sendMessage(message: string, to: string) {
    return this.client.sendMessage(to, message);
  }

  displayMessage(chatName: string, messageBody: string) {
    console.log(`[${chatName}] ${messageBody}`);
  }

  async getChats() {
    const chats = await this.client.getChats();
    for (const chat of chats) {
      console.log(`Carregando mensagens da conversa: ${chat.name}`);
      const messages = await chat.fetchMessages({ limit: 100 });
      for (const message of messages) {
        this.displayMessage(chat.name, message.body);
      }
    }
  }

  chatBotMessage(message) {
    if (message.body.startsWith('!ping')) {
      message.reply('pong');
      this.client.sendMessage(message.from, 'Olá!');
      return;
    }
    if (this.helloPeople(message.body)) {
      const replyMessage = 'Olá, tudo bem? Diga em poucas palavras em que posso te ajudar:';
      message.reply(replyMessage);
      this.client.sendMessage(message.to, replyMessage);
      return;
    }
  }

  helloPeople(messageBody: string): boolean {
    const hello = ['oi', 'olá', 'ola', 'bom dia', 'boa tarde', 'boa noite'];
    return hello.some((phrase) => messageBody.includes(phrase));
  }
}
