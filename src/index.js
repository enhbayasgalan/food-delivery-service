import express from "express";
import cors from "cors"
import { connect } from "mongoose";
import { foodRouter } from "./routes/food.routes.js";
import { orderRouter } from "./routes/Order.routes.js";
import { userRouter } from "./routes/user.routes.js";
import { categoryRouter } from "./routes/category.routes.js";
import dotenv from 'dotenv'

dotenv.config()

const url = process.env.DATABASE_CONNECTED_URL

const connectToDB = async () => {
  try {
    await connect(url);
    console.log("DB Connected");
  } catch (error) {
    console.log("error while connecting DB", error);
  }
};

connectToDB();


const app = express()
const port = 5000;

app.use(express.json())

app.use('/food', foodRouter);
app.use('/order', orderRouter);
app.use('/user', userRouter);
app.use('/category', categoryRouter)

app.use(cors())

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
});
