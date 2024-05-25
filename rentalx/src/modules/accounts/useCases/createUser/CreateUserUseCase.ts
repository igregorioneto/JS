import { hash } from "bcrypt";

import { UserRepository } from "../../repositories/implementations/UsersRepository";
import { ICreateUserDTO } from "../../repositories/IUsersRepository";

class CreateUserUseCase {
    constructor(private usersRepository: UserRepository) { }

    async execute({ name, email, password, driver_license }: ICreateUserDTO): Promise<void> {
        const userAlreadyExists = await this.usersRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error("User already exists!");
        }

        const passwordHash = await hash(password, 8);
        await this.usersRepository.create({ name, email, password: passwordHash, driver_license });
    }
}

export { CreateUserUseCase };