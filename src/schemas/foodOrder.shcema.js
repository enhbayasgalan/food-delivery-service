import mongoose from "mongoose";
const foodOrderSchema = new mongoose.Schema({
  user: { type: mongoose.Types.ObjectId, require: true, ref: "users" },
  totalPrice: { type: Number, require: true },
  foodOrderItems: [{
   food : { type: mongoose.Types.ObjectId ,ref: "foods" },
    quantity : {type: Number}
  }
  ],
  status: {
    type: String,
    enum: ["PENDING", "CANCELLED", "DELIVERED"],
    require: true,
    default : "PENDING"
  },
  createdAt : {
    type : Date,
    require : true,
    default : Date.now()
  },
  address: { type: String }
});

export const Order = mongoose.model("foodOrderSchema", foodOrderSchema);
