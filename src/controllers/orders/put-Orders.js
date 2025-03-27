// import { Order } from "../../schemas/foodOrder.shcema"

import { Order } from "../../schemas/foodOrder.shcema.js";

export const putOrders = async (req, res) => {
    const {status} = req.body

    const { id } = req.params


    const filter = { _id:id}
    const UpdatedFoodOrderData = {
        status
    }

    if (!status) {
        return res.status(400).send("status not found", status)
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
