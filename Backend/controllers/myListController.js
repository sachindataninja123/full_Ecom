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

const deleteToMyList = async (req, res) => {
  try {
    const myListItem = await myListModel.findById(req.params.id);

    if (!myListItem) {
      return res.status(404).json({
        message: "The Item id was not Found!",
        error: true,
        success: false,
      });
    }
    const deletedItem = await myListModel.findByIdAndDelete(req.params.id);

    if (!deletedItem) {
      return res.status(404).json({
        message: "The Item is not deleted!",
        error: true,
        success: false,
      });
    }

    return res.status(200).json({
      message: "Item removed from My List",
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

const getAllMyList = async (req, res) => {
  try {
    const userId = req.userId;

    const myListItem = await myListModel.find({
        userId : userId
    })

    return res.status(200).json({
        success : true,
        data : myListItem,
        error: false,
    })

  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

module.exports = { addToMyList, deleteToMyList  , getAllMyList};
