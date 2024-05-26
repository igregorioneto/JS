import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { UserRepository } from "../../repositories/implementations/UsersRepository";

import 'dotenv/config';
import { AppError } from "../../../../errors/AppErrors";

interface IRequest {
    email: string;
    password: string;
}

interface IResponse {
    user: {
        name: string;
        email: string;
    },
    token: string;
}

class AuthenticateUserUseCase {
    constructor(private usersRepository: UserRepository) {}

    async execute({ email, password }: IRequest): Promise<IResponse> {
        const user = await this.usersRepository.findByEmail(email);

        if (!user) {
            throw new AppError('Email or password incorrect!', 401);
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new AppError('Email or password incorrect!', 401);
        }

        const secretSalt = process.env.SECRET_SALT;

        if (!secretSalt) {
            throw new AppError('SECRET_SALT environment variable is not defined.', 401);
        }

        const token = sign({}, secretSalt, {
            subject: user.id,
            expiresIn: '1d'
        });

        const tokenResult: IResponse = {
            token,
            user: {
                name: user.name,
                email: user.email
            }
        }

        return tokenResult;
    }
}

export { AuthenticateUserUseCase };