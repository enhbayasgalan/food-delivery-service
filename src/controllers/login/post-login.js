import { json } from "express";
import { Users } from "../../schemas/users.schema.js";
import bcrypt from "bcrypt";
import jsonwebtoken from "jsonwebtoken";

export const checkpassword = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await Users.findOne({ email: email });

    if (!user) {
      res.send("user not found").status(400);
    }
    console.log(user);

    const passwordCorrect = await bcrypt.compare(password, user.password);

    console.log(passwordCorrect);

    if (!passwordCorrect) {
      res.send("Wrong password").status(400);
    } else {
      console.log(process.env.JWT_TOKEN_SECRET_KEY);

      const token = jsonwebtoken.sign(
        {
          email: user.email,
          role: user.role,
          address: user.address,
          userId: user._id,
        },
        process.env.JWT_TOKEN_SECRET_KEY
      );
      console.log(token);

      res.send(token).status(200);
    }
  } catch (error) {
    console.error(error);
    res.send(500).json({ message: "interval server error" });
  }
};
