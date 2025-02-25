import { Category } from "../../schemas/categories.schema.js"

export const getCategories = async (req, res) => {
    try {
        const categories = await Category.find()
        res.status(200).sen(categories)
    } catch (error) {
        res.status(500).send("Not Fail")
        console.log(error)
    }
}