import { createUser } from "../controllers/users/create-user.js";
import { getUsers } from "../controllers/users/get-users.js";
// import { deleteElIndex } from "../controllers/users/delete-users.js";
import express from 'express';
import { putUsers } from "../controllers/users/put-user.js";
import { deleteUser } from "../controllers/users/delete-user.js";
// import { Password } from "../controllers/login/get-login.js";

export const userRouter = express.Router(); 
userRouter.get('/', getUsers)
userRouter.post('/', createUser)
userRouter.put('/', putUsers)
userRouter.delete('/', deleteUser)
// userRouter.delete('/', deleteElIndex)
// userRouter.get('/login', Password)