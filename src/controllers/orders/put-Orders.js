// import { Order } from "../../schemas/foodOrder.shcema"

import { Order } from "../../schemas/foodOrder.shcema.js";

export const putOrders = async (req, res) => {
    const {user, totalPrice, status} = req.body

    const filter = {user, totalPrice, status}
    const UpdatedFoodOrderData = {
        user,
        totalPrice,
        status
    }

    try {
        const UpdatedFoodOrder = await Order.findOneAndUpdate(filter, UpdatedFoodOrderData, {new:true})    
        if (!UpdatedFoodOrder) {
            return res.status(404).send("foodOrder items not found ")
        }
        res.status(200).send("foodOrder item updated successful")
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while updating the foodOrder item")
    }
}
