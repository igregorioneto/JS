import { Injectable } from "@nestjs/common";
import { UserRepositorie } from "./user.repositorie";
import { User } from "./user.entity";

@Injectable()
export class UserService {
    constructor(private readonly userRepositorie: UserRepositorie) { }

    async findAll(): Promise<User[]> {
        return await this.userRepositorie.findAll();
    }

    async findOne(id: string): Promise<User> {
        return await this.userRepositorie.findOne(id);
    }

    async create(userData: User): Promise<User> {
        if (!userData.email || !userData.name) {
            throw new Error("Email or Name not insert");
        }
        return await this.userRepositorie.create(userData);
    }

    async update(id: string, userData: User): Promise<User> {
        return await this.userRepositorie.update(id, userData);
    }

    async delete(id: string): Promise<void> {
        return await this.userRepositorie.delete(id);
    }

}