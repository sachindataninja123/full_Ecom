const mongoose = require("mongoose");

const cartProductSchema = mongoose.Schema(
  {
    productId: {
      type: mongoose.Schema.ObjectId,
      ref: "products",
    },
    quantity: {
      type: Number,
      default: 1,
    },
    userId: {
      type: mongoose.Schema.ObjectId,
      ref: "User",
    },
  },

  {
    timestamps: true,
  },
);

const cartProductModel = mongoose.model("cartProduct", cartProductSchema);

module.exports = cartProductModel;
