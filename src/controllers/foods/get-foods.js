import { Foods } from "../../schemas/food.shema.js"

export const getFoods = async (req, res) => {
    const {category} = req.body
    try {
        if (category){
            if (category == "dishes"){
                const foods = Foods.find()
                res.status(200).send(foods)
            } else {
                const foods = await Foods.find({category: category})
                res.status(200).send(foods)
            }}else {
                res.status(500).send("category not foods")
            }
    } catch (error) {
        res.status(500).send("failed");
        console.log(error)
    }
}