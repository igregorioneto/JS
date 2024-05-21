import { Specification } from "../../entities/Specification";
import { ICreateSpecificationDTO, ISpecificationRepository } from "../ISpecificationsReporitory";

class SpecificationsRepository implements ISpecificationRepository {
    private specifications: Specification[];

    private static INSTANCE: SpecificationsRepository;

    private constructor() {
        this.specifications = [];
    }

    public static getInstance(): SpecificationsRepository {
        if (!SpecificationsRepository.INSTANCE) {
            SpecificationsRepository.INSTANCE = new SpecificationsRepository();
        }
        return SpecificationsRepository.INSTANCE;
    }

    create({ name, description }: ICreateSpecificationDTO): void {
        const specification = new Specification(name, description);
        this.specifications.push(specification);
    }

    findByName(name: string): Specification | undefined {
        return this.specifications.find((s) => s.name === name);
    }    
}

export { SpecificationsRepository };