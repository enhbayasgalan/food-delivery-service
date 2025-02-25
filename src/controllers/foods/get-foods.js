import { Foods } from "../../schemas/food.shema"

export const getFoods = async (req, res) => {
    const {category} = req.body
    try {
        if (category){
            if (category == "all dishes"){
                const Allfoods = Foods.find()
                res.status(200).send(Allfoods)
            } else {
                const foods = await Foods.find({category: category})
                res.status(200).send(foods)
            }}else {
                res.status(500).send("category not getfoods")
            }
    } catch (error) {
        res.status(500).send("failed");
        console.log(error)
    }
}