
import mongoose from "mongoose";
const foodOrderItemSchema = new mongoose.Schema({
    food: {type: mongoose.Types.ObjectId, ref : "foods"},
    quantity : {type : String, require : true},
});

export const Users = mongoose.model("oodOrderItemSchema", foodOrderItemSchema);