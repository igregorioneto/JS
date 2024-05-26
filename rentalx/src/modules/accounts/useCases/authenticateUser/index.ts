import { UserRepository } from "../../repositories/implementations/UsersRepository";
import { AuthenticateUserController } from "./AuthenticateUserController";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

export default (): AuthenticateUserController => {
    const usersRepository = new UserRepository();
    const authenticateUserUseCase = new AuthenticateUserUseCase(usersRepository);
    const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase);

    return authenticateUserController;
}