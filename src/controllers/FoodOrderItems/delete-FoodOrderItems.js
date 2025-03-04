import { FoodOrderItems } from "../../schemas/foodOrderItem.schema.js"

export const deleteFoodItems = async (req,res) => {
    const {quantity} = req.body
    if (!quantity) {
        res.status(400).send("quantity is required to delete an item")
    }

    try {
        const deleteFoodItem = await FoodOrderItems.findOneAndDelete({quantity})

        if (!deleteFoodItem) {
            res.status(404).send("FoodItems items bot found")
        }

        res.status(200).send("delete fooditems")
    } catch (error) {
        console.error(error);
        res.status(500).send("Error items delete required")
    }
}