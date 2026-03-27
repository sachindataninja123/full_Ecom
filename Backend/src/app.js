const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const helmet = require("helmet");
const userRoutes = require("../routes/userRoutes");
const categoryRouter = require("../routes/categoryRoutes");

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

app.use("/api/user", userRoutes);
app.use("/api/category", categoryRouter);

module.exports = app;
