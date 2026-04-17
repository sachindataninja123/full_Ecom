const express = require("express");
const { addAddressController } = require("../controllers/addressController");
const auth = require("../middlewares/auth");

const addressRouter = express.Router();

addressRouter.post("/add", auth, addAddressController);



module.exports = addressRouter