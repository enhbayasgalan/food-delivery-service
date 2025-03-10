import { FoodOrderItems } from "../../schemas/foodOrderItem.schema.js"

export const putFoodOrderItems = async (req, res) => {
    try {
        const {quanity, user} = req.body
        const {id} = req.params

        const {updateItems} = FoodOrderItems.findById({id});

        if(!updateItems) {
          return res.status(404).send("Food order item not found")
        }

        await updateItems.save()

        res.status(200).send(updateItems)
    } catch (error) {
        console.error(error);
        res.status(500).send(`update cart error : ${error}`)
    }
}
