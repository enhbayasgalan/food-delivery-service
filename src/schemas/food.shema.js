
import mongoose from "mongoose";
const foodSchema = new mongoose.Schema({
    foodName: {type: String, require: true},
    price: {type : Number, require : true},
    image: { type : String, require : true},
    ingredients: { type : String, require: true },
    category: { type : mongoose.Types.ObjectId, ref : "categories" },
    createdAt : {type : Date, default:new Date(), require:false},
    updatedAt : {type :Date, require:false }
});

export const Foods = mongoose.model("foods", foodSchema);