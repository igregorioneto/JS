import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import 'dotenv/config';
import { UserRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

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
        throw new Error("Token missing!");
    }

    const [, token] = authHeader.split(" ");

    const secretSalt = process.env.SECRET_SALT;

    if (!secretSalt) {
        throw new Error('SECRET_SALT environment variable is not defined.');
    }

    try {
        const { sub: user_id } = verify(token, secretSalt) as IPayload;
        
        const userRepository = new UserRepository();
        const user = await userRepository.findById(user_id);

        if (!user) {
            throw new Error("User does not exists!");
        }

        next();
    } catch (error) {
        throw new Error("Invalid token!");
    }
}