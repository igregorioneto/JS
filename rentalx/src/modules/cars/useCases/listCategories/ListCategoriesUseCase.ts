import { Category } from "../../entities/Category";
import { CategoriesReporitory } from "../../repositories/implementations/CategoriesRepository";

class ListCategoriesUseCase {
    constructor(private categoriesRepository: CategoriesReporitory) {}

    async execute(): Promise<Category[]> {
        return await this.categoriesRepository.list();
    }
}

export { ListCategoriesUseCase };