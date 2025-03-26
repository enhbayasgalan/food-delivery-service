import { Order } from "../../schemas/foodOrder.shcema.js"

export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.find({})
            .populate({
                path: "foodOrderItems.food", // Populate the "food" field inside each item
                model: "foods" // Ensure it references the correct collection
            }).populate({
                path : "user",
                model : "users"
            });

        res.status(200).json(orders)
    } catch (error) {
        console.error(error);
        res.status(500).send("Failed to create order")
    }
}