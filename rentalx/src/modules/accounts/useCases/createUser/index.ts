import { UserRepository } from "../../repositories/implementations/UsersRepository";
import { CreateUserController } from "./CreateUserController";
import { CreateUserUseCase } from "./CreateUserUseCase";

export default (): CreateUserController => {
    const usersRepository = new UserRepository();
    const createUserUseCase = new CreateUserUseCase(usersRepository);
    const createCategoryController = new CreateUserController(createUserUseCase);

    return createCategoryController;
}