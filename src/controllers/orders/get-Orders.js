import { json } from "express"
import { Order } from "../../schemas/foodOrder.shcema.js"

export const getOrders = async (req, res) => {
    try {
        const orders = await Order.find()
        res.status(200).json(orders)
    } catch (error) {
        console.error(error);
        res.status(500).send("Failed to create order")
    }
}