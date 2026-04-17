const addressModel = require("../models/address.model");
const userModel = require("../models/user.model");

const addAddressController = async (req, res) => {
  try {
    const { address_line, city, state, pincode, country, mobile, status } =
      req.body;

    const userId = req.userId;
    // console.log(userId);

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized user",
        error: true,
        success: false,
      });
    }

    if (
      !address_line?.trim() ||
      !city?.trim() ||
      !state?.trim() ||
      !pincode?.trim() ||
      !country?.trim() ||
      !mobile?.trim()
    ) {
      return res.status(400).json({
        message: "Please provide all required fields",
        error: true,
        success: false,
      });
    }

    if (typeof status !== "boolean") {
      return res.status(400).json({
        message: "Status must be true or false",
        error: true,
        success: false,
      });
    }

    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        error: true,
        success: false,
      });
    }

    const address = new addressModel({
      address_line,
      city,
      state,
      pincode,
      country,
      mobile,
      status,
      userId,
    });

    const savedAddress = await address.save();

    user.address_details.push(savedAddress._id);
    await user.save();

    return res.status(200).json({
      message: "Address Saved Successfully",
      data: savedAddress,
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

const getAddressController = async (req, res) => {
  try {
    const userId = req.userId;

    if (!userId) {
      return res.status(401).json({
        message: "unauthorized!",
        error: true,
        success: false,
      });
    }

    const address = await addressModel.find({ userId });

    if (!address.length) {
      return res.status(404).json({
        error: true,
        success: false,
        message: "Address not found!",
      });
    }

    return res.status(200).json({
      success: true,
      error: false,
      data: address,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

module.exports = { addAddressController, getAddressController };
