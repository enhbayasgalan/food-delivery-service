import { Router } from "express";
import { getFoodOrderItems } from "../controllers/FoodOrderItems/get-FoodOrderItems.js";
import { postFoodOrderItems } from "../controllers/FoodOrderItems/post-FoodsOrderItems.js";
import { putFoodOrderItems } from "../controllers/FoodOrderItems/put-FoodOrderItems.js";
import { deleteFoodItems } from "../controllers/FoodOrderItems/delete-FoodOrderItems.js";



export const foodOrderItems = Router(); 

foodOrderItems.get('/', getFoodOrderItems)
foodOrderItems.post('/:id', postFoodOrderItems)
foodOrderItems.put('/', putFoodOrderItems)
foodOrderItems.delete('/',  deleteFoodItems)