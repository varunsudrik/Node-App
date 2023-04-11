import express from "express";
import mongoose from "mongoose";
let app = express();
import productRouter from "./src/controller/productRoute.js";
import categoryRouter from "./src/controller/categoryRoute.js";
import path from "path";
app.use(express.static(path.join(path.resolve() + "/public")));

// created connection
mongoose
  .connect("mongodb://localhost:27017/kiki")
  .then(console.log("Db Connected"))
  .catch((err) => {
    console.log(err);
  });

// create schema
const playlistSchema = new mongoose.Schema({
  name: String,
  age: Number,
  date: {
    type: Date,
    default: Date.now,
  },
  member: {
    type: Boolean,
    default: false,
  },
});

// create collection
const playlist = new mongoose.model("playlist", playlistSchema);

// create document

const createDocument = async () => {
  const reactPlaylist = new playlist({
    name: "react-playlist",
    age: 22,
    member: false,
  });
  const nodePlaylist = new playlist({
    name: "node ",
    age: 22,
    member: false,
  });

  await reactPlaylist.save();
};
createDocument();
let routes = [
  {
    path: "/",
    key: "Home",
  },
  {
    path: "/category",
    key: "Category",
  },
  {
    path: "/products",
    key: "Products",
  },
];

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use("/products", productRouter);
app.use("/category", categoryRouter);

app.get("/", (req, res) => {
  res.render("index", { title: "My title", name: "rahul", routes });
});

app.listen(4000);
