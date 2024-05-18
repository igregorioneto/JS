import { Category } from "../../model/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

class CategoriesReporitory implements ICategoryRepository {
    private categories: Category[];

    private static INSTANCE: CategoriesReporitory;

    private constructor() {
        this.categories = [];
    }

    public static getInstance(): CategoriesReporitory {
        if (!CategoriesReporitory.INSTANCE) {
            CategoriesReporitory.INSTANCE = new CategoriesReporitory();
        }
        return CategoriesReporitory.INSTANCE;
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

export { CategoriesReporitory, ICreateCategoryDTO };