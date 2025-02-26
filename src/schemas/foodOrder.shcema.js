import mongoose from "mongoose";
const foodOrderSchema = new mongoose.Schema({
    user: {type: mongoose.Types.ObjectId, require : true, ref : "users"},
    totalPrice : {type : Number, require : true},
    foodOrderItems : [{type : mongoose.Types.ObjectId, ref : "foodOrderItem"}],
    status : {
        type : String,
        enum : ["PENDING", "CANCELLED", "DELIVERED"],
        require : true,
    },
    
});

export const Order = mongoose.model("foodOrderSchema", foodOrderSchema);