import mongoose from "mongoose";
import { stringify } from "uuid";

const usersSchema = new mongoose.Schema({
  email: { type: String, require: true },
  password: { type: String, require: true },
  phoneNumber: { type: String },
  address: { type: String },
  role: {
    type: String,
    require: true,
    enum: ["USER", "ADMIN"],
    default: "USER",
  },
  orderFoods: [
    {
      name: String,
      type: {
        type: { type: String },
      },
    },
  ],
  address: { type: String },
  isVerrified: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, require: false },
});

export const Users = mongoose.model("users", usersSchema);
