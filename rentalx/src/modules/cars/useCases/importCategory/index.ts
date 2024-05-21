import { CategoriesReporitory } from "../../repositories/implementations/CategoriesRepository";
import { ImportCategoryController } from "./ImportCategoryController";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

export default (): ImportCategoryController => {
    const categoryRepository = new CategoriesReporitory;
    const importCategoryUseCase = new ImportCategoryUseCase(categoryRepository);
    const importCategoryController = new ImportCategoryController(importCategoryUseCase);

    return importCategoryController;
};