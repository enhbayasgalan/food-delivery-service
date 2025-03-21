import { Users } from "../../schemas/users.schema";

export const authentication = async () => {
    try {
        const {email, password} = req.body;
        if (!email) {
            return res.status(400).send("email invalid")
        }
        if (!password) {
            return res.status(400).send("password invalid")
        }
        if (!email && !password) {
            return res.status(400).send("email an password invalid")
        }
        const users = await Users.findOne({email})
        if (users) {
            return res.status(400).send("email used")
        }
        next()
    } catch (error) {
        return res.status(500).send(`error: ${error}`)
    }
}