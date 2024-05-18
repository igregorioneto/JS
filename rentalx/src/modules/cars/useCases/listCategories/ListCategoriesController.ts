import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { Category } from "../../model/Category";

class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) { }

    handle(request: Request, response: Response): Response {
        const all = this.listCategoriesUseCase.execute();
        return response.status(200).json(all);
    }
}

export { ListCategoriesController };