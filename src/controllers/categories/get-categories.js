import { Category } from "../../schemas/categories.schema.js";

export const getCategories = async (req, res) => {
  try {
    const categories = await Category.aggregate([
      {
        $match: {},
      },
      {
        $lookup: {
          from: "foods",
          localField: "_id",
          foreignField: "category",
          as: "foods",
        },
      },
      {
        $project: {
          categoryName: 1,
          food_count: { $size: "$foods" },
        },
      },
    ]);
    res.status(200).send(categories);
  } catch (error) {
    res.status(500).send("Not Fail");
    console.log(error);
  }
};
