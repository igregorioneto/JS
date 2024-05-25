import { Router } from "express";
import createCategoryController from "../modules/accounts/useCases/createUser";


const usersRoutes = Router();

usersRoutes.post("/", (request, response) => {
    return createCategoryController().handle(request, response);
})

export { usersRoutes };