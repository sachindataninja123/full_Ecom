const express = require("express");
const myListModel = require("../models/myList.model");

const addToMyList = async (req, res) => {
  try {
    const userId = req.userId;

    const {
      productId,
      productTitle,
      image,
      rating,
      price,
      oldPrice,
      brand,
      discount,
    } = req.body;

    const item = await myListModel.findOne({
      userId: userId,
      productId: productId,
    });

    if (item) {
      return res.status(400).json({
        message: "Item already in myList",
      });
    }

    const myList = new myListModel({
      productId,
      productTitle,
      image,
      rating,
      price,
      oldPrice,
      brand,
      discount,
      userId,
    });
    const save = await myList.save();

    return res.status(200).json({
      message: "Item save in the my List",
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

module.exports = { addToMyList };
