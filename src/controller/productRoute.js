import express from "express";

let productRouter = express.Router();

let products = [
  {
    id: 1,
    name: "Shoe",
    price: 4000,
  },
  {
    id: 2,
    name: "socket",
    price: 35,
  },
  {
    id: 3,
    name: "perfume",
    price: 686,
  },
];

productRouter.route("/").get((req, res) => {
  res.send(products);
});

productRouter.route("/details").get((req, res) => {
  res.send("Product Details");
});

export default productRouter;
