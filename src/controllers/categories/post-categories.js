import { Category } from "../../schemas/categories.schema.js"

export const postCategories = async (req, res) => {
    const {categoryName} =  req.body
    try {
        
        if (categoryName) {
            if (categoryName) {
                const result = new Category({categoryName:categoryName});
                await result.save()
                res.status(200).send("category successfully")
            } else {
                res.status(400).send("category Not fail")
            }
        } else {
            res.send("category good")
        }
    } catch (error) {
        console.log(error); 
    }
}