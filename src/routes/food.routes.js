import { Router } from "express";
import { getFoods } from "../controllers/foods/get-foods.js";
import { postFoods } from "../controllers/foods/post-foods.js";
import { putFoods } from "../controllers/foods/put-foods.js";
import {  deleteFoods} from "../controllers/foods/delete-foods.js";


export const foodRouter = Router(); 

foodRouter.get('/:category', getFoods)
foodRouter.post('/', postFoods)
// UPDATE FOOD ITEM
foodRouter.put('/', putFoods)
foodRouter.delete('/', deleteFoods)