const express = require("express");
const {
  addToCartItem,
  getCartItem,
  updateCartItemQty,
  deleteCartItem,
} = require("../controllers/cartController");
const auth = require("../middlewares/auth");

const cartRouter = express.Router();

cartRouter.post("/add", auth, addToCartItem);
cartRouter.get("/get", auth, getCartItem);
cartRouter.put("/update-qty", auth, updateCartItemQty);
cartRouter.delete("/delete-cart-item", auth, deleteCartItem);

module.exports = cartRouter;
