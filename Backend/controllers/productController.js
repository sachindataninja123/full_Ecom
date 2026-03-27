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
      subCat: body.subCatName,
      thirdSubCat: body.thirdSubCatName,
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

// get All Products
const getAllProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage);
    const totalPosts = await productModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return res.status(404).json({
        message: "Page not found",
        error: true,
        success: false,
      });
    }

    const products = await productModel
      .find()
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      res.status(500).json({
        error: true,
        success: false,
      });
    }

    return res.status(200).json({
      success: true,
      error: false,
      products: products,
      totalPages: totalPages,
      page: page,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};

// get All Products By Category Id
const getAllProductsByCatId = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10000;
    const totalPosts = await productModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return res.status(404).json({
        message: "Page not found",
        error: true,
        success: false,
      });
    }

    const products = await productModel
      .find({
        catId: req.params.id,
      })
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      res.status(500).json({
        error: true,
        success: false,
      });
    }

    return res.status(200).json({
      success: true,
      error: false,
      products: products,
      totalPages: totalPages,
      page: page,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};

// get All Products By Cat Name
const getAllProductsByCatName = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10000;
    const totalPosts = await productModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return res.status(404).json({
        message: "Page not found",
        error: true,
        success: false,
      });
    }

    const products = await productModel
      .find({
        catName: req.query.catName,
      })
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      res.status(500).json({
        error: true,
        success: false,
      });
    }

    return res.status(200).json({
      success: true,
      error: false,
      products: products,
      totalPages: totalPages,
      page: page,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};

// get All Products By Sub Category Id
const getAllProductsBySubCatId = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10000;
    const totalPosts = await productModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return res.status(404).json({
        message: "Page not found",
        error: true,
        success: false,
      });
    }

    const products = await productModel
      .find({
        subCatId: req.params.id,
      })
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      res.status(500).json({
        error: true,
        success: false,
      });
    }

    return res.status(200).json({
      success: true,
      error: false,
      products: products,
      totalPages: totalPages,
      page: page,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};

// get All Products By Sub Cat Name
const getAllProductsBySubCatName = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10000;
    const totalPosts = await productModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return res.status(404).json({
        message: "Page not found",
        error: true,
        success: false,
      });
    }

    const products = await productModel
      .find({
        subCatName: req.query.subCatName,
      })
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      res.status(500).json({
        error: true,
        success: false,
      });
    }

    return res.status(200).json({
      success: true,
      error: false,
      products: products,
      totalPages: totalPages,
      page: page,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};

const getAllProductsByThirdLevelCatId = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10000;
    const totalPosts = await productModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return res.status(404).json({
        message: "Page not found",
        error: true,
        success: false,
      });
    }

    const products = await productModel
      .find({
        thirdSubCatId: req.params.id,
      })
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      res.status(500).json({
        error: true,
        success: false,
      });
    }

    return res.status(200).json({
      success: true,
      error: false,
      products: products,
      totalPages: totalPages,
      page: page,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};

// get All Products By Sub Cat Name
const getAllProductsByThirdLevelCatName = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 10000;
    const totalPosts = await productModel.countDocuments();
    const totalPages = Math.ceil(totalPosts / perPage);

    if (page > totalPages) {
      return res.status(404).json({
        message: "Page not found",
        error: true,
        success: false,
      });
    }

    const products = await productModel
      .find({
        thirdSubCatName: req.query.thirdSubCatName,
      })
      .populate("category")
      .skip((page - 1) * perPage)
      .limit(perPage)
      .exec();

    if (!products) {
      res.status(500).json({
        error: true,
        success: false,
      });
    }

    return res.status(200).json({
      success: true,
      error: false,
      products: products,
      totalPages: totalPages,
      page: page,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};

module.exports = {
  uploadProductImages,
  createProduct,
  getAllProducts,
  getAllProductsByCatId,
  getAllProductsByCatName,
  getAllProductsBySubCatId,
  getAllProductsBySubCatName,
  getAllProductsByThirdLevelCatId,
  getAllProductsByThirdLevelCatName
};
