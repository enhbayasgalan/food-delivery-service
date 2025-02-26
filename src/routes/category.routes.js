import { Router } from "express";
import { getCategories } from "../controllers/categories/get-categories.js";
import { postCategories } from "../controllers/categories/post-categories.js";

export const categoryRouter = Router(); 

categoryRouter.get('/', getCategories)
categoryRouter.post('/', postCategories)     