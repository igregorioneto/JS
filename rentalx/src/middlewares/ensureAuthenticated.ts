import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import 'dotenv/config';
import { UserRepository } from "../modules/accounts/repositories/implementations/UsersRepository";
import { AppError } from "../errors/AppErrors";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing!");
    }

    const [, token] = authHeader.split(" ");

    const secretSalt = process.env.SECRET_SALT;

    if (!secretSalt) {
        throw new AppError('SECRET_SALT environment variable is not defined.', 401);
    }

    try {
        const { sub: user_id } = verify(token, secretSalt) as IPayload;
        
        const userRepository = new UserRepository();
        const user = await userRepository.findById(user_id);

        if (!user) {
            throw new AppError("User does not exists!", 401);
        }

        // Gravar no response o id do usuário

        next();
    } catch (error) {
        throw new AppError("Invalid token!", 401);
    }
}