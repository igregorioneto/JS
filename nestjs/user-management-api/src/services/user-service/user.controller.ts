import { Body, Controller, Delete, Get, Injectable, Param, Post, Put } from "@nestjs/common";
import { UserService } from "./user.service";
import { User } from "./user.entity";

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Get()
    async findAll(): Promise<User[]> {
        return await this.userService.findAll();
    }

    @Get(':id')
    async findOne(@Param('id') id: string): Promise<User> {
        return await this.userService.findOne(id);
    }

    @Post()
    async create(@Body() userData: User): Promise<User> {
        return await this.userService.create(userData);
    }

    @Put(':id')
    async update(@Param('id') id: string, @Body() userData: User): Promise<User> {
        return await this.userService.update(id, userData);
    }

    @Delete(':id')
    async delete(@Param('id') id: string): Promise<void> {
        return await this.userService.delete(id);
    }
}