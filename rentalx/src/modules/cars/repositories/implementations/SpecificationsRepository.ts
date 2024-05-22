import { Repository } from "typeorm";
import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationsReporitory";
import { AppDataSource } from "../../../../../data-source";

class SpecificationsRepository implements ISpecificationRepository {
    private repotiroty: Repository<Specification>;

    // private static INSTANCE: SpecificationsRepository;

    constructor() {
        this.repotiroty = AppDataSource.getRepository(Specification);
    }

    // public static getInstance(): SpecificationsRepository {
    //     if (!SpecificationsRepository.INSTANCE) {
    //         SpecificationsRepository.INSTANCE = new SpecificationsRepository();
    //     }
    //     return SpecificationsRepository.INSTANCE;
    // }

    async create({ name, description }: ICreateSpecificationDTO): Promise<void> {
        const specification = this.repotiroty.create({ name, description });
        await this.repotiroty.save(specification);
    }

    async findByName(name: string): Promise<Specification | null> {
        return await this.repotiroty.findOne({ where: { name } });
    }    
}

export { SpecificationsRepository };