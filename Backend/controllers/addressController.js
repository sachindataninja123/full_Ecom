const addressModel = require("../models/address.model");
const userModel = require("../models/user.model");

const addAddressController = async (req, res) => {
  try {
    const { address_line, city, state, pincode, country, mobile, status } =
      req.body;

    const userId = req.userId;

    if (!address_line || city || pincode || state || country || mobile) {
      return res.status(500).json({
        message: "Please Provide all the fields",
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
    });

    const savedAddress = await address.save();

    const updateAddressUser = await userModel.updateOne(
      { _id: userId },
      {
        $push: {
          address_details: savedAddress?.id,
        },
      },
    );

     return res.status(200).json({
      message: "Address Saved Successfully",
      data: updateAddressUser,
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


module.exports = {addAddressController}