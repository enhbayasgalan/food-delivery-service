import { Users } from "../../schemas/users.schema.js"

export const getAddress = async (req, res) => {
    try {
        const user = await Users.findById({_id : req.userId})
        res.status(200).send(user.address)
    } catch (error) {
        res.status(500).send("error")
    }
}