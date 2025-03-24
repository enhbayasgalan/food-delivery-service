import { Order } from "../../schemas/foodOrder.shcema.js";

export const postOrders = async (req, res) => {
  const { totalPrice, foodOrderItems } = req.body;
console.log(totalPrice);
console.log(foodOrderItems);

  
  try {
    if (!totalPrice && !foodOrderItems) {
      res.status(400).send("Missing required fields");
    } else {
      const foodOrder = await Order.create({
        user: req.userId,
        totalPrice: totalPrice,
        foodOrderItems: (foodOrderItems),
      });

      await foodOrder.save();

      res.status(201).send(foodOrder);
    }
  } catch (error) {
    res.status(500).send("Failed to create order");
    console.error(error);
  }
};
