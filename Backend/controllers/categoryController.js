const categoryModel = require("../models/category.model");

const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CONFIG_CONFIG_NAME,
  api_key: process.env.CLOUDINARY_CONFIG_API_KEY,
  api_secret: process.env.CLOUDINARY_CONFIG_API_SECRET,
  secure: true,
});

const uploadImages = async (req, res) => {
  try {
    const file = req.file; // multer single upload

    // 🔴 Check file
    if (!file) {
      return res.status(400).json({
        message: "Image is required",
        error: true,
        success: false,
      });
    }

    // 🔴 Find user
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        error: true,
        success: false,
      });
    }

    // 🔥 Upload & Replace (overwrite)
    const result = await cloudinary.uploader.upload(file.path, {
      public_id: user.avatar_public_id || `users/${userId}`,
      folder: "users", // optional but good practice
      overwrite: true, // 🔥 THIS REPLACES OLD IMAGE
    });

    if (fs.existsSync(file.path)) {
      fs.unlinkSync(file.path);
    }


    user.avatar = result.secure_url;
    user.avatar_public_id = result.public_id;
    await user.save();

    // 🔥 Response
    return res.status(200).json({
      message: "Avatar updated successfully",
      id: userId,
      error: false,
      success: true,
      data: {
        avatar: result.secure_url,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};