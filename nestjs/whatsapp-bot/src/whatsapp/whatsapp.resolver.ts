import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { WhatsappService } from './whatsapp.service';

@Resolver()
export class WhatsappResolver {
    constructor(private readonly whatsappService: WhatsappService) {}

    @Query(() => String)
    async getChats(): Promise<string> {
        await this.whatsappService.getChats();
        return 'Chats carregados';
    }

    @Mutation(() => String)
    async sendMessage(@Args('message') message: string, @Args('to') to: string): Promise<string> {
        await this.whatsappService.sendMessage(to, message);
        return 'Message enviada';
    }
}
