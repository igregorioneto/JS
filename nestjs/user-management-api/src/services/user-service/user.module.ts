import { Module } from "@nestjs/common";
import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UserRepositorie } from "./user.repositorie";

@Module({
    controllers: [UserController],
    providers: [UserService, UserRepositorie]
})
export class UserModule {}