import { Users } from "../../schemas/users.schema.js";
import bcrypt from "bcrypt"


export const  createUser = async (req , res) => {
    const {email, password} = req.body;
console.log(email, password, "create user");

    if (!email) {
        res.send("email invalid").status(400)
    }
    console.log(email);

    if (!password) {
        res.send("password invalid").status(400)
    }else{
    try{
        const saltRounds = 10;
        const hashedPasssword = await bcrypt.hash(password, saltRounds)
        const newUser = await Users.create({
            email: email,
            password: hashedPasssword
        });
        res.send(newUser).status(201);
    }catch(err){
        res.send(err).status(500);
    }}
}