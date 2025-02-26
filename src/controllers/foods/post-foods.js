import { Foods } from "../../schemas/food.shema.js"

export const postFoods = async (req, res) => {
    const {foodName, price, image, ingredients, category} = req.body;
    try {
        const food = new Foods({foodName, price, image, ingredients, category});
        await food.save();
        res.status(200).send(`foods: ${food}`)
    } catch (error) {
        console.error(error)
    }
} 