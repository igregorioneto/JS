import { getRepository, Repository } from "typeorm";
import { Category } from "../../entities/Category";
import { ICategoryRepository, ICreateCategoryDTO } from "../ICategoriesRepository";
import { AppDataSource } from "../../../../../data-source";

class CategoriesReporitory implements ICategoryRepository {
    private repository: Repository<Category>;

    // private static INSTANCE: CategoriesReporitory;

    constructor() {
        this.repository = AppDataSource.getRepository(Category);
    }

    // public static getInstance(): CategoriesReporitory {
    //     if (!CategoriesReporitory.INSTANCE) {
    //         CategoriesReporitory.INSTANCE = new CategoriesReporitory();
    //     }
    //     return CategoriesReporitory.INSTANCE;
    // }

    async create({ name, description }: ICreateCategoryDTO): Promise<void> {
        const category = this.repository.create({name, description});
        await this.repository.save(category);
    }

    async list(): Promise<Category[]> {
        return await this.repository.find();
    }

    async findByName(name: string): Promise<Category | null> {
        return await this.repository.findOne({ where: { name } });
    }
}

export { CategoriesReporitory, ICreateCategoryDTO };