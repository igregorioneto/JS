import { ICategoryRepository } from "../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryService {
    constructor(private categoriesReposiroty: ICategoryRepository) { }

    execute({ name, description }: IRequest): void {
        const categoryAlreadyExists = this.categoriesReposiroty.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category Already exists!");
        }

        this.categoriesReposiroty.create({ name, description });
    }
}

export { CreateCategoryService };