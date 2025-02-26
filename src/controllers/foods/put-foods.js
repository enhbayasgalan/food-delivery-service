// export const putFoods = async (req, res) => {
//     try {
//         const foodID = new req.params.id
//         if (!foodID) {
//             return res.status(404).send({
//                 success: false,
//                 message: "no food id was found"
//             })
//         }
//         const fooded = await foodSchema.findById(foodID)
//         if (!fooded) {
//             return res.status(404).send({
//                 success: false,
//                 message: "no Food Found"
//             })
//         }
//         const {foodName, price, image, ingredients, category} = req.body
//         const updatedFood = await foodSchema.findByIdAndUpadate(foodID, {
//             foodName, price, image, ingredients, category
//         }, {new:true})
//         res.status(200).send(updatedFood)
//     } catch (error) {
//         consolelog(error)
//         res.status(500).send({
//             success: false,
//             message: "Error in updated Food API"
//         })
//     }
// }

import { Foods } from "../../schemas/food.shema.js";

// import mongoose from "mongoose";
// import { Foods } from "../../schemas/food.shema.js";

export const putFoods = async (req, res) => {
  const { foodName, price, image, ingredients, category } = req.body;
    const filter = { foodName };
    const UpdateData = {
        foodName,
        price,
        image,
        ingredients,
        category
    }

    try {
        const Updatefood = await Foods.findOneAndUpdate(filter, UpdateData, {new:true})
        if (!Updatefood) {
            return res.status(404).send("food item not found")
        }
        res.status(200).send("food item updated successfull")
    } catch (error) {
        console.error(error);
        res.status(500).send("An error occurred while updating the food item")
    }
};
