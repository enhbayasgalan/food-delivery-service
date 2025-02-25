import { createUser } from "../controllers/users/create-user.js";
import { getUsers } from "../controllers/users/get-users.js";
// import { deleteElIndex } from "../controllers/users/delete-users.js";
import express from 'express';
// import { Password } from "../controllers/login/get-login.js";

export const userRouter = express.Router(); 
userRouter.get('/', getUsers)
userRouter.post('/', createUser)
// userRouter.delete('/', deleteElIndex)
// userRouter.get('/login', Password)