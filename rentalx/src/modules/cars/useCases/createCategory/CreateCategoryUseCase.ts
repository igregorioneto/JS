import { ICategoryRepository } from "../../repositories/ICategoriesRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateCategoryUseCase {
    constructor(private categoriesReposiroty: ICategoryRepository) { }

    async execute({ name, description }: IRequest): Promise<void> {
        const categoryAlreadyExists = await this.categoriesReposiroty.findByName(name);

        if (categoryAlreadyExists) {
            throw new Error("Category Already exists!");
        }

        await this.categoriesReposiroty.create({ name, description });
    }
}

export { CreateCategoryUseCase };