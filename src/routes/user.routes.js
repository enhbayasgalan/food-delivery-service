import { createUser } from "../controllers/users/create-user.js";
import { getUsers } from "../controllers/users/get-users.js";
// import { deleteElIndex } from "../controllers/users/delete-users.js";
import express from 'express';
import { putUsers } from "../controllers/users/put-user.js";
import { deleteUser } from "../controllers/users/delete-user.js";
import { checkpassword } from "../controllers/login/post-login.js";
import { getAddress } from "../controllers/users/getAdderess.js";

// import { Password } from "../controllers/login/get-login.js";

export const userRouter = express.Router(); 
userRouter.get('/', getUsers)
userRouter.post('/', createUser)
userRouter.put('/', putUsers)
userRouter.delete('/', deleteUser)
userRouter.post('/login', checkpassword)
userRouter.get('/address', getAddress)
// userRouter.delete('/', deleteElIndex)
// userRouter.get('/login', Password)