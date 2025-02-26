import { Router } from "express";
import { getOrders } from "../controllers/orders/get-Orders.js";
import { postFoods } from "../controllers/foods/post-foods.js";
import { postOrders } from "../controllers/orders/post-Orders.js";

export const orderRouter = Router(); 

orderRouter.get('/', getOrders)
orderRouter.post('/', postOrders)