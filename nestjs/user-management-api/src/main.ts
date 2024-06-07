import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { UserModule } from './services/user-service/user.module';

async function bootstrap() {
  const app = await NestFactory.create(UserModule);
  await app.listen(3000);
}
bootstrap();
