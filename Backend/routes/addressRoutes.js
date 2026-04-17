const express = require("express");
const {
  addAddressController,
  getAddressController,
} = require("../controllers/addressController");
const auth = require("../middlewares/auth");

const addressRouter = express.Router();

addressRouter.post("/add", auth, addAddressController);
addressRouter.get("/get", auth, getAddressController);

module.exports = addressRouter;
