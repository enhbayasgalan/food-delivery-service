import { Foods } from "../../schemas/food.shema.js";

export const getFoods = async (req, res) => {
  const {category} = req.params
  console.log(category);
  
  try {
    const foods =await Foods.find({category:category});
    res.status(200).send(foods);
  } catch (error) {
    res.status(500).send("failed");
    console.log(error);
  }
};
