import { AppError } from "../../../../errors/AppErrors";
import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";

interface IRequest {
    name: string;
    description: string;
}

class CreateSpecificationUseCase {
    constructor(private specificationsRepository: SpecificationsRepository) {}

    async execute({ name, description }: IRequest): Promise<void> {
        const specification = await this.specificationsRepository.findByName(name);

        if (specification) {
            throw new AppError("Specification Already exists!", 401);
        }

        await this.specificationsRepository.create({ name, description });
    }
}

export { CreateSpecificationUseCase };