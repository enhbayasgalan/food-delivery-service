import { Users } from "../../schemas/users.schema.js";



export const getUsers = async (req, res) => {
    try{
        const users = await Users.find({});
        res.status(200).send(users);
    }
    catch(err){
        res.status(500).send(err);
    }
}