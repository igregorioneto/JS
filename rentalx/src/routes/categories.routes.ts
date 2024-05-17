import { Router } from "express";
import { CategoriesReporitory } from "../repositories/CategoriesRepository";

const categoriesRoutes = Router();
const categoriesReporitory = new CategoriesReporitory();

categoriesRoutes.post("/", (request, response) => {
    const { name, description } = request.body;

    const categoryAlreadyExists = categoriesReporitory.findByName(name);

    if (categoryAlreadyExists) {
        return response.status(400).json({ error: "Category Already exists!" });
    }

    categoriesReporitory.create({ name, description });

    return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
    const all = categoriesReporitory.list();
    return response.status(200).json(all);
});

export { categoriesRoutes };
