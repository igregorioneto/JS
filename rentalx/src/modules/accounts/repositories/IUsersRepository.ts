interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
    driver_license: string;
    is_admin: boolean;
}

interface IUsersRepository {
    create({ name, email, password, driver_license, is_admin }: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository, ICreateUserDTO };