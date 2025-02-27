import { Router } from "express";
import { getFoodOrderItems } from "../controllers/FoodOrderItems/get-FoodOrderItems.js";

export const foodOrderItems = Router(); 

foodOrderItems.get('/', getFoodOrderItems)