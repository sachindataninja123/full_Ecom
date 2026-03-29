const cartProductModel = require("../models/cart.model");
const userModel = require("../models/user.model");

//add to cart item
const addToCartItem = async (req, res) => {
  try {
    const userId = req.userId;
    const { productId } = req.body;

    if (!productId) {
      return res.status(400).json({
        message: "Provide ProductID",
        error: true,
        success: false,
      });
    }

    const checkItemCart = await cartProductModel.findOne({
      userId: userId,
      productId: productId,
    });

    if (checkItemCart) {
      return res.status(400).json({
        message: "Item already in cart",
      });
    }

    const cartItem = new cartProductModel({
      quantity: 1,
      userId: userId,
      productId: productId,
    });

    const save = await cartItem.save();

    const updateCartUser = await userModel.updateOne(
      { _id: userId },
      {
        $push: {
          shopping_cart: productId,
        },
      },
    );

    return res.status(200).json({
      message: "Item added Successfully",
      data: save,
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

// get all cart item
const getCartItem = async (req, res) => {
  try {
    const userId = req.userId;

    const cartItem = await cartProductModel
      .find({
        userId: userId,
      })
      .populate("productId");

    return res.status(200).json({
      data: cartItem,
      success: true,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

// update cart quantity
const updateCartItemQty = async (req, res) => {
  try {
    const userId = req.userId;
    const { _id, Qty } = req.body;

    if (!_id || !Qty) {
      return res.status(400).json({
        message: "Provide _id , Qty",
        error: true,
        success: false,
      });
    }

    const updateCartItem = await cartProductModel.updateOne(
      {
        _id: _id,
        userId: userId,
      },
      { quantity: Qty },
    );

    return res.status(200).json({
      message: "Update Cart",
      data: updateCartItem,
      success: true,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

// delete item from cart
const deleteCartItem = async (req, res) => {
  try {
    const userId = req.userId;
    const { _id, productId } = req.body;

    if (!_id || !productId) {
      return res.status(400).json({
        message: "Provide _id and productId",
        success: false,
        error: true,
      });
    }

    const deleted = await cartProductModel.deleteOne({ _id, userId });

    //check deletedCount instead of !deleted
    if (deleted.deletedCount === 0) {
      return res.status(404).json({
        message: "Cart item not found!",
        success: false,
        error: true,
      });
    }

    // Fixed: use $pull instead of manual array splice
    await userModel.updateOne(
      { _id: userId },
      { $pull: { shopping_cart: productId } },
    );

    return res.status(200).json({
      message: "Item removed Successfully",
      data: deleted,
      success: true,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

module.exports = {
  addToCartItem,
  getCartItem,
  updateCartItemQty,
  deleteCartItem,
};
