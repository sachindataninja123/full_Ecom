const productModel = require("../models/product.model");

const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CONFIG_CONFIG_NAME,
  api_key: process.env.CLOUDINARY_CONFIG_API_KEY,
  api_secret: process.env.CLOUDINARY_CONFIG_API_SECRET,
  secure: true,
});

// image upload

const uploadProductImages = async (req, res) => {
  let files = req.files;

  try {
    // 🔴 Check files
    if (!files || files.length === 0) {
      return res.status(400).json({
        message: "Product images are required",
        error: true,
        success: false,
      });
    }

    let imagesArr = [];

    // 🔥 Upload each image
    for (let i = 0; i < files.length; i++) {
      const result = await cloudinary.uploader.upload(files[i].path, {
        folder: "products", // 👈 important
      });

      imagesArr.push({
        url: result.secure_url,
        public_id: result.public_id, // 🔥 useful for delete later
      });
    }

    // ✅ Response
    return res.status(200).json({
      message: "Product images uploaded successfully",
      success: true,
      images: imagesArr,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  } finally {
    // 🔥 ALWAYS DELETE LOCAL FILES
    if (files && files.length > 0) {
      files.forEach((file) => {
        try {
          if (fs.existsSync(file.path)) {
            fs.unlinkSync(file.path);
            console.log("Deleted:", file.path);
          }
        } catch (err) {
          console.log("Delete error:", err.message);
        }
      });
    }
  }
};

// create Product
const createProduct = async (req, res) => {
  try {
    const body = req.body || {};

    const product = await productModel.create({
      name: body.name,
      description: body.description,
      images: body.images || [],
      brand: body.brand,
      price: body.price,
      oldPrice: body.oldPrice,
      catName: body.catName,
      catId: body.catId,
      subCatId: body.subCatId,
      subCat: body.subCat,
      thirdSubCat: body.thirdSubCat,
      thirdSubCatId: body.thirdSubCatId,
      countInStock: body.countInStock,
      rating: body.rating,
      isFeatured: body.isFeatured,
      discount: body.discount,
      productRam: body.productRam,
      size: body.size,
      productWeight: body.productWeight,
    });

    return res.status(201).json({
      message: "Product Created Successfully",
      success: true,
      product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};

// getAllProducts
const getAllProducts = async (req, res) => {
  try {

    

    const products = await productModel.find();

    if (!products) {
      res.status(500).json({
        error: true,
        success: false,
      });
    }

    return res.status(200).json({
      success: true,
      error: false,
      data: products,
    });


  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};

module.exports = { uploadProductImages, createProduct , getAllProducts};
