import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './services/user-service/user.module';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [DatabaseModule, UserModule],
})
export class AppModule { }
