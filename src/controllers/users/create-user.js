import { Users } from "../../schemas/users.schema.js";



export const  createUser = async (req , res) => {
    const {email, password} = req.body;

    if (!email) {
        res.send("email invalid").status(400)
    }
    console.log(email);

    if (!password) {
        res.send("password invalid").status(400)
    }
    console.log(password);
    
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