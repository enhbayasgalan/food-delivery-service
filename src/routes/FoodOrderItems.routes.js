import { Router } from "express";
import { getFoodOrderItems } from "../controllers/FoodOrderItems/get-FoodOrderItems.js";
import { postFoodOrderItems } from "../controllers/FoodOrderItems/post-FoodsOrderItems.js";

export const foodOrderItems = Router(); 

foodOrderItems.get('/', getFoodOrderItems)
foodOrderItems.post('/:id', postFoodOrderItems)