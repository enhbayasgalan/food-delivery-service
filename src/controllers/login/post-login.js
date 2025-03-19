import { json } from "express";
import { Users } from "../../schemas/users.schema.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken"

export const checkpassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({email});

    if (!user) {
        return res.status(400).send("user not found");
    }
    console.log(user);

    const passwordCorrect = await bcrypt.compare(password, user.hashedPassword);

    if (!passwordCorrect) {
        return res.status(400).send("Wrong password or email")
    }
    const token = jsonwebtoken.sign({user:user}, process.env.JWT_TOKEN_SECRET_KEY, {expiresIn: "8h"})
    console.log(token);
    
    res.status(token).status(200)
  } catch (error) {
    console.error(error);
    return res.status(500).json({message: "interval server error"})
  }
};
