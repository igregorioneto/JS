import { Repository } from "typeorm";
import { ICreateUserDTO, IUsersRepository } from "../IUsersRepository";
import { User } from "../../entities/User";
import { AppDataSource } from "../../../../../data-source";

class UserRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = AppDataSource.getRepository(User);
    }
    
    async create({ name, email, password, driver_license }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({ name, email, password, driver_license });
        await this.repository.save(user);
    }

    findByEmail(email: string): Promise<User | null> {
        return this.repository.findOne({ where: { email } });
    }

}

export { UserRepository };