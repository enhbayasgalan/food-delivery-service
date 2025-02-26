import { Order } from "../../schemas/foodOrder.shcema.js";

export const postOrders = async (req, res) => {
  const { user, totalPrice, status } = req.body;
  try {
    if (!user || !totalPrice  || !status) {
      res.status(400).send("Missing required fields");
    }

    const foodOrder = await Order.create({
      user: user,
      totalPrice : totalPrice,
    //   foodOrderItems : foodOrderItems,
      status : status
    });

    await foodOrder.save()

    res.status(201).send(foodOrder)
  } catch (error) {
    res.status(500).send("Failed to create order");
    console.error(error)
  }
};
