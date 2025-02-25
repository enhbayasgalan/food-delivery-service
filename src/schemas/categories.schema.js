import mongoose from "mongoose";
const categoryiesSchema = new mongoose.Schema({
    categoryName : {type : String, require : true},
});

export const Category = mongoose.model("categories", categoryiesSchema)