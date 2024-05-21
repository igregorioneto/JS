import { Request, Response } from "express";
import { ListCategoriesUseCase } from "./ListCategoriesUseCase";
import { Category } from "../../entities/Category";

class ListCategoriesController {
    constructor(private listCategoriesUseCase: ListCategoriesUseCase) { }

    async handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>> {
        const all = await this.listCategoriesUseCase.execute();
        return response.status(200).json(all);
    }
}

export { ListCategoriesController };