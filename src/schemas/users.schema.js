import mongoose from "mongoose";
import { Users } from "./food.shema";

const usersSchema = new mongoose.Schema({
    email : {type : String, require : true},
    password: { type : String, require : true },
    phoneNumber : {type : String, require : true},
    address: {type : String, require : true, default: "hdffe"},
    role: {
        type : String,
        require : true,
        enum : ["USER", "ADMIN"],
        default: "USER",
    },
    address : {type : String, require : true},
    isVerrified : {type : Boolean, require : true},
});

export const Users = mongoose.model("users", usersSchema)