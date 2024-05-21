import { CategoriesReporitory } from "../../repositories/implementations/CategoriesRepository";
import { CreateCategoryController } from "./CreateCategoryController";
import { CreateCategoryUseCase } from "./CreateCategoryUseCase";

export default (): CreateCategoryController => {
    const categoryRepository = new CategoriesReporitory();
    const createCategoryUseCase = new CreateCategoryUseCase(categoryRepository);
    const createCategoryController = new CreateCategoryController(createCategoryUseCase);

    return  createCategoryController;
};