import { Test, TestingModule } from '@nestjs/testing';
import { WhatsappResolver } from './whatsapp.resolver';

describe('WhatsappResolver', () => {
  let resolver: WhatsappResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WhatsappResolver],
    }).compile();

    resolver = module.get<WhatsappResolver>(WhatsappResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
