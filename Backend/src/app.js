const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const path = require("path");

const userRouter = require("../routes/userRoutes");
const categoryRouter = require("../routes/categoryRoutes");
const productRouter = require("../routes/productRoutes");
const cartRouter = require("../routes/cartRoutes");
const myListRouter = require("../routes/myListRoutes");
const addressRouter = require("../routes/addressRoutes");

const app = express(); // create app once, at the top

// ── Middleware (order matters!) ──────────────────────────────
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true, // needed for cookies
  }),
); // single cors() call handles preflight too

app.use(express.json()); // parse JSON request bodies
app.use(cookieParser()); // parse cookies
app.use(morgan("dev")); //format string required
app.use(helmet({ crossOriginResourcePolicy: false }));

app.use("/uploads", express.static(path.join(__dirname, "../uploads")));

// ── Routes ───────────────────────────────────────────────────
app.use("/api/user", userRouter);
app.use("/api/category", categoryRouter);
app.use("/api/product", productRouter);
app.use("/api/cart", cartRouter);
app.use("/api/myList", myListRouter);
app.use("/api/address", addressRouter);

module.exports = app;
