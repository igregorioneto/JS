import { Request, Response } from "express";
import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
    constructor(private createUserUseCase: CreateUserUseCase) {}

    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password, driver_license, is_admin } = request.body;

        await this.createUserUseCase.execute({ name, email, password, driver_license, is_admin });

        return response.status(201).send();
    }

}

export { CreateUserController };