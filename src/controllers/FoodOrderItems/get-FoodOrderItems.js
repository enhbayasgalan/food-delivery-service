import { FoodOrderItems } from "../../schemas/foodOrderItem.schema.js"

export const getFoodOrderItems = async (req, res) => {
    try {
        const foodOrderItem = await FoodOrderItems.find({user: req.userId})
        res.status(200).send(foodOrderItem)
    } catch (error) {
        console.error(error);
        res.send(`FoodOrder Items: ${error}`).status(500)
    }
}