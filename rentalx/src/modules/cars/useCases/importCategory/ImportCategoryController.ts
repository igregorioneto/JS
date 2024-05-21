import { Request, Response } from "express";
import { ImportCategoryUseCase } from "./ImportCategoryUseCase";

class ImportCategoryController {
    constructor(private importCategoryUseCase: ImportCategoryUseCase) {}

    async handle(request: Request, response: Response): Promise<Response<any, Record<string, any>>> {
        const { file } = request;
        await this.importCategoryUseCase.execute(file!);
        return response.send();
    }
}

export { ImportCategoryController };