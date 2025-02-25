import { Users } from "../../schemas/foodOrderItem.schema.js";


export const  createUser = async (req , res) => {
    const {email, password} = req.body;

    if (!email) {
        res.send("email invalid").status(400)
    }
    console.log(email);
    
    try{
   
        const newUser = await Users.create({
            email: email,
            password: password
        });
        res.send(newUser).status(201);
    }catch(err){
        res.send(err).status(500);
    }
}