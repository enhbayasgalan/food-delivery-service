import mongoose from "mongoose";
import { stringify } from "uuid";


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
    orderFoods: [
        {
            name : String,
            type : {
                type : {type: String}
            },
        },
    ],
    address : {type : String, require : true},
    isVerrified : {type : Boolean, require : true},
    createdAt : {type: Date, default: Date.now},
    updatedAt : {type : Date, require : false},
});

export const Users = mongoose.model("users", usersSchema)