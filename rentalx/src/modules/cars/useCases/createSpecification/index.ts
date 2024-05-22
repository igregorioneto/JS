import { SpecificationsRepository } from "../../repositories/implementations/SpecificationsRepository";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

export default (): CreateSpecificationController => {
    const specificationsRepository = new SpecificationsRepository();
    const createSpecificationsUseCase = new CreateSpecificationUseCase(specificationsRepository);
    const createSpecificationsController = new CreateSpecificationController(createSpecificationsUseCase);

    return createSpecificationsController;
}