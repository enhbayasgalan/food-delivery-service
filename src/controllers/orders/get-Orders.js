import { Order } from "../../schemas/foodOrder.shcema.js"

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find({user : req.userId})
            .populate({
                path: "foodOrderItems.food", // Populate the "food" field inside each item
                model: "foods" // Ensure it references the correct collection
            });

        res.status(200).json(orders)
    } catch (error) {
        console.error(error);
        res.status(500).send("Failed to create order")
    }
}