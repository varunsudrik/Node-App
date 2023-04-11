import express from "express";
import mongoose from "mongoose";
let productRouter = express.Router();

// import dotenv from "dotenv"; // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
// dotenv.config();
let app = express();
mongoose
  .connect("mongodb://localhost:27017/dodo")
  .then(console.log("connects"))
  .catch((err) => {
    console.log(err);
  });

// create Schema object
const newSchema = new mongoose.Schema([
  {
    id: Number,
    product_name: String,
    category: String,
    category_id: Number,
    Price: Number,
    Size: String,
    Image: String,
    Color: String,
    Brand: String,
  },
]);

// create Collection object
const collection = mongoose.model("collection", newSchema);

// function to read collection
const getDocument = async () => {
  const products = await collection.find();
  console.log(products);

  productRouter.route("/").get((req, res) => {
    res.render("products", { title: "Product", products });
  });

  productRouter.route("/details").get((req, res) => {
    res.send("Product Details");
  });
};

getDocument();

export default productRouter;
