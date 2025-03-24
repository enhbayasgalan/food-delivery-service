import { Users } from "../../schemas/users.schema.js"

export const putUsers = async (req, res) => {
    const {address} = req.body
    console.log(req.userId);
    
    try {
        const putusers = await Users.findOneAndUpdate(
            {_id : req.userId},
            {address: address},
            {new: true}
        )

        if (putusers) {
        } else {
            res.send("user not found")
        }
        res.status(200).send(putusers)
    } catch (error) {
        console.error(error);
        res.status(500).send("error edit")
    }
}