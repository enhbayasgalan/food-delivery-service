import { connect } from "mongoose";
import dotenv from 'dotenv'
dotenv.config()
const url = process.env.DATABASE_CONNECTED_URL

export const connectToDB = async () => {
  try {
    await connect(url);
    console.log("DB Connected");
  } catch (error) {
    console.log("error while connecting DB", error);
  }
};

connectToDB();