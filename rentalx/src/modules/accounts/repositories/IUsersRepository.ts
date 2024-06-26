import { User } from "../entities/User";

interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
    driver_license: string;
}

interface IUsersRepository {
    create({ name, email, password, driver_license }: ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
}

export { IUsersRepository, ICreateUserDTO };