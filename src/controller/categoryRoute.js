import express from "express";
let categoryRouter = express.Router();
import mongoose from "mongoose";
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
    category: String,
    thubm: String,
  },
]);

// create Collection object
const category = mongoose.model("category", newSchema);

// function to read collection
const getDocument = async () => {
  const result = await category.find();
  console.log(result);

  categoryRouter.route("/").get((req, res) => {
    res.render("category", {
      title: "fwe",
      data: result,
    });
  });
};

getDocument();

export default categoryRouter;
