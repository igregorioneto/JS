import { Category } from "../model/Category";

interface ICreateCategoryDTO {
    name: string;
    description: string;
}

class CategoriesReporitory {
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