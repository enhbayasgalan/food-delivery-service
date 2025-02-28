

import { FoodOrderItems } from "../../schemas/foodOrderItem.schema.js";

export const postFoodOrderItems = async (req, res) => {
    const {quantity, user } = req.body;
    const {id} = req.params;
    
    try {
        const foodorderitems = new FoodOrderItems({
            food : id,
            quantity : quantity,
            user : user
        })
        await foodorderitems.save()
        res.send(foodorderitems).status(200)
    } catch (error) {
        res.send(`add cart : ${error}`).status(500)
    }
}
