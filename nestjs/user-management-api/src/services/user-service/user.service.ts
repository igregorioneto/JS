import { Inject, Injectable } from "@nestjs/common";
import { User } from "./user.entity";
import { Repository } from "typeorm";

@Injectable()
export class UserService {
    constructor(
        @Inject('USER_REPOSITORY')
        private userRepositorie: Repository<User>
    ) { }

    async findAll(): Promise<User[]> {
        return await this.userRepositorie.find();
    }

    async findOne(id: string): Promise<User> {
        return await this.userRepositorie.findOneBy({id});
    }

    async create(userData: User): Promise<User> {
        if (!userData.email || !userData.name) {
            throw new Error("Email or Name not insert");
        }
        const entity = this.userRepositorie.create(userData);
        return await this.userRepositorie.save(entity);
    }

    async update(id: string, userData: User): Promise<User> {
        return await this.userRepositorie.save(userData);
    }

    async delete(id: string): Promise<void> {
        await this.userRepositorie.delete(id);
    }

}