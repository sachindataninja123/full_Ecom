const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const userRouter = require("../routes/userRoutes");
const categoryRouter = require("../routes/categoryRoutes");
const productRouter = require("../routes/productRoutes");
const cartRouter = require("../routes/cartRoutes");
const myListRouter = require("../routes/myListRoutes");

const app = express();
app.use(cors());

app.use(express.json());
app.use(cookieParser());
app.use(morgan());
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  }),
);

app.use("/api/user", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/myList", myListRouter);

module.exports = app;
