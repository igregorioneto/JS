import { Category } from "../../model/Category";
import { CategoriesReporitory } from "../../repositories/implementations/CategoriesRepository";

class ListCategoriesUseCase {
    constructor(private categoriesRepository: CategoriesReporitory) {}

    execute(): Category[] {
        return this.categoriesRepository.list();
    }
}

export { ListCategoriesUseCase };