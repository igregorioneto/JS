import { UserRepository } from "../../repositories/implementations/UsersRepository";
import { ICreateUserDTO } from "../../repositories/IUsersRepository";

class CreateUserUseCase {
    constructor(private usersRepository: UserRepository) {}

    async execute({ name, email, password, driver_license }: ICreateUserDTO): Promise<void> {
        await this.usersRepository.create({ name, email, password, driver_license });
    }
}

export { CreateUserUseCase };