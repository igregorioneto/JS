import { Injectable } from "@nestjs/common";
import { User } from "./user.entity";

@Injectable()
export class UserRepositorie {
    private readonly users: User[] = [];

    async findAll(): Promise<User[]> {
        return this.users;
    }

    async findOne(id: string): Promise<User> {
        return this.users.find(user => user.id === id);
    }

    async create(userData: User): Promise<User> {
        const newUser = { id: Math.random().toString(), ...userData };
        this.users.push(newUser);
        return newUser;
    }

    async update(id: string, userData: User): Promise<User> {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1) {
            throw new Error("User not found");
        }
        this.users[index] = { ...this.users[index], ...userData };
        return this.users[index];
    }

    async delete(id: string): Promise<void> {
        const index = this.users.findIndex(user => user.id === id);
        if (index === -1) {
            throw new Error("User not found");
        }
        this.users.splice(index, 1);
    }
}