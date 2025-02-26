import { Foods } from "../../schemas/food.shema.js"

export const getFoods = async (req, res) => {
    const {foodName} = req.body
    try {
        if (foodName){
            if (foodName == "dishes"){
                const foods = Foods.find()
                res.status(200).send(foods)
            } else {
                const foods = await Foods.find({foodName: foodName})
                res.status(200).send(foods)
            }}else {
                res.status(500).send("not foods")
            }
    } catch (error) {
        res.status(500).send("failed");
        console.log(error)
    }
}