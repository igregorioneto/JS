import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UserRepositorie } from "./user.repositorie";
import { DatabaseModule } from "src/database/database.module";
import { userProviders } from "./user.providers";

@Module({
    imports: [DatabaseModule],
    controllers: [UserController],
    providers: [...userProviders,UserService, UserRepositorie]
})
export class UserModule {}