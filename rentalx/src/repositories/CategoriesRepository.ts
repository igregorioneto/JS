import { Category } from "../model/Category";
import { ICategoryRepository } from "./ICategoriesRepository";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

class CategoriesReporitory implements ICategoryRepository {
    private categories: Category[];

    constructor() {
        this.categories = [];
    }

    create({ name, description }: ICreateCategoryDTO): void {
        const category = new Category(name, description);
        this.categories.push(category);
    }

    list(): Category[] {
        return this.categories;
    }

    findByName(name: string): Category | undefined {
        return this.categories.find((c) => c.name === name);
    }
}

export { CategoriesReporitory };