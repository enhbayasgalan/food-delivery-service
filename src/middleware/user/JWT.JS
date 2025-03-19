import { Users } from "../../schemas/users.schema";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const JWT = async (req, res, next) => {
    const {email, password} = req.body;
    try {
        const isSigned = await Users.findOne({email});
        if (!isSigned) {
            res.send({
                success: false,
                message: "Account not found",
            });
        } else {
            const isCorrect = await bcrypt.compare(password, isSigned.password)
            const dataAsMiloSecond = Date.now();
            console.log(dataAsMiloSecond);
            const currentDate = new Date(dataAsMiloSecond).toLocaleString();

            const dataAsSecond = Math.floor(dataAsMiloSecond / 1000);
            console.log(dataAsSecond);
            const currentDateInSeconds = new Date(
                dataAsSecond * 1000
            ).toLocaleString();

            console.log("currentDateInSeconds", currentDateInSeconds);
            
            const expirationTime = dataAsSecond + 60 * 60;
            console.log(expirationTime);
            const expirationDate = new Date(expirationTime * 1000).toLocaleString();
            console.log("expirationDate",expirationDate);
            const decodePassword = "1234";
            if (isCorrect) {
                const token = jwt.sign(
                    {exp : Math.floor(Date.now() / 1000) + 60 * 60, data: isSigned},
                    decodePassword
                );
                console.log("this is token", token);
                
                const decoded = jwt.verify(token, "1111");

                console.log("this is decoded", decoded);
                res.send({
                    success: false,
                    message: "logged in",
                    token : token,
                });
            } else {
                res.send({
                    success: false,
                    message: "wrong password"
                });
            }
        }
    } catch (error) {
        console.log(error);
        res.status(500).json({message: `user sign in error: ${error}`})
    }
}