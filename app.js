import express from "express";
let app = express();
import productRouter from "./src/controller/productRoute.js";
import categoryRouter from "./src/controller/categoryRoute.js";
import path from "path";
app.use(express.static(path.join(path.resolve() + "/public")));
console.log(path.join(path.resolve() + "/public"));

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use("/products", productRouter);
app.use("/category", categoryRouter);

app.get("/", (req, res) => {
  res.render("index", { title: "My title", name: "rahul" });
});

app.listen(4000);
