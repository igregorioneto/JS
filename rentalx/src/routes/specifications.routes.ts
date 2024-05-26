import { Router } from "express";
import createSpecificationsController from "../modules/cars/useCases/createSpecification";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const specificationsRoutes = Router();

specificationsRoutes.use(ensureAuthenticated);
specificationsRoutes.post("/", (request, response) => {
    return createSpecificationsController().handle(request, response);
});

export { specificationsRoutes };