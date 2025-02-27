
import mongoose from "mongoose";
const foodOrderItemSchema = new mongoose.Schema({
    food: {type: mongoose.Types.ObjectId, ref : "foods"},
    quantity : {type : Number, require : true},
    user : {type : mongoose.Types.ObjectId, require: true}
});

export const FoodOrderItems = mongoose.model("foodOrderItemSchema", foodOrderItemSchema);