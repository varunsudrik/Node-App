import express from "express";
let categoryRouter = express.Router();

let category = [
  {
    id: 1,
    category: "footwear",
  },
  {
    id: 2,
    category: "fashion",
  },
  {
    id: 3,
    category: "gadgets",
  },
];

categoryRouter.route("/").get((req, res) => {
  res.send(category);
});

export default categoryRouter;
