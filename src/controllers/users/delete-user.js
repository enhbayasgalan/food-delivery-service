import { Users } from "../../schemas/users.schema"

export const deleteUser = async (req, res) => {
    const {email} = req.body
    try {
        const deleteuser = await Users.findOneAndDelete({email})

        if (!deleteuser) {
            return res.status(404).json({message: "user not found "})
        }
        return res.status(200).json({message: "User deleted successfully."})
    } catch (error) {
        console.error("Error deleting user:", error);
        return res.status(500).json({message: "An error occurred while deleting the user."})
    }
}