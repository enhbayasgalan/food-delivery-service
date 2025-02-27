import { Order } from "../../schemas/foodOrder.shcema.js"

export const deleteOrders = async (req, res) => {
    const {totalPrice} = req.body
    if (!totalPrice) {
        res.status(400).send("totalPrice is required to delete an item")
    }
    try {
        const deleteFoodOrder = await Order.findOneAndDelete({totalPrice})

        if (!deleteFoodOrder) {
            res.status(404).send("FoodOrder items bot found")
        }

        res.status(200).send("delete totalPrice")
     } catch (error) {
        console.error(error);
        res.status(500).send("Error items delete required")
    }
}