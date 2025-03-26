// import { Foods } from "../../schemas/food.shema.js"

import { Foods } from "../../schemas/food.shema.js"

export const deleteFoods = async (req, res) => {
    // const {foodName} = req.body

    // if (!foodName) {
    //     res.status(400).send("FoodName is required to delete an item")
    // }

    // try {
    //     const deleteFoods = await Foods.findOneAndDelete({foodName});

    //     if (!deleteFoods) {
    //         res.status(404).send("Food item not found")
    //     }

    //     res.status(200).send("delete")
    // } catch (error) {
    //     console.error(error);
    //     res.status(500).send("An error occurred while deleting the food item")
    // }

    const {id} = req.params
    try {
        const foods = await Foods.findByIdAndDelete({_id: id})
        res.send('deleted').status(200)
    } catch (error) {
        res.send(`failed to delete ${error}`).status(500)
    }
}

