import { Router } from "express";
import { getOrders } from "../controllers/orders/get-Orders.js";
import { postFoods } from "../controllers/foods/post-foods.js";
import { postOrders } from "../controllers/orders/post-Orders.js";
import { putOrders } from "../controllers/orders/put-Orders.js";
import { deleteFoods } from "../controllers/foods/delete-foods.js";
import { deleteOrders } from "../controllers/orders/delete-Orders.js";
import { authenticationJWT } from "../middleware/user/jsonwebtoken.js";

export const orderRouter = Router(); 

orderRouter.get('/', getOrders)
orderRouter.post('/',authenticationJWT, postOrders)
orderRouter.put('/', putOrders)
orderRouter.delete('/', deleteOrders)