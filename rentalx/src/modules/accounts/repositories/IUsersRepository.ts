interface ICreateUserDTO {
    name: string;
    email: string;
    password: string;
    driver_license: string;
}

interface IUsersRepository {
    create({ name, email, password, driver_license }: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository, ICreateUserDTO };