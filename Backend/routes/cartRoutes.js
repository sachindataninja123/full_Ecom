const express = require("express");
const { addToCartItem, getCartItem } = require("../controllers/cartController");
const auth = require("../middlewares/auth");

const cartRouter = express.Router();

cartRouter.post("/add", auth, addToCartItem);
cartRouter.get("/get", auth, getCartItem);


module.exports = cartRouter