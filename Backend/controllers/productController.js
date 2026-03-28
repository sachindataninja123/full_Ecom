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
    // Check files
    if (!files || files.length === 0) {
      return res.status(400).json({
        message: "Product images are required",
        error: true,
        success: false,
      });
    }

    let imagesArr = [];

    // Upload each image
    for (let i = 0; i < files.length; i++) {
      const result = await cloudinary.uploader.upload(files[i].path, {
        folder: "products", // important
      });

      imagesArr.push({
        url: result.secure_url,
        public_id: result.public_id, //  useful for delete later
      });
    }

    //  Response
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
    // ALWAYS DELETE LOCAL FILES
    if (files && files.length > 0) {
      files.forEach((file) => {
        try {
          if (fs.existsSync(file.path)) {
            fs.unlinkSync(file.path);
            // console.log("Deleted:", file.path);
          }
        } catch (err) {
          // console.log("Delete error:", err.message);
        }
      });
    }
  }
};

// // create Product
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
      catId: body.catId,
      catName: body.catName,
      subCatId: body.subCatId,
      subCatName: body.subCatName,
      thirdSubCatId: body.thirdSubCatId,
      thirdSubCatName: body.thirdSubCatName,
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

// get All Products By ThirdLevelSub Cat Id
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

// get All Products By ThirdLevelSub Name
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

// get All Products By Price
const getAllProductsByPrice = async (req, res) => {
  try {
    const {
      catId,
      subCatId,
      thirdSubCatId,
      minPrice,
      maxPrice,
      page = 1,
      limit = 10,
    } = req.query;

    let query = {};

    // 🔥 Category filters (priority based)
    if (thirdSubCatId) {
      query.thirdSubCatId = thirdSubCatId;
    } else if (subCatId) {
      query.subCatId = subCatId;
    } else if (catId) {
      query.catId = catId;
    }

    // 🔥 Price filter
    if (minPrice || maxPrice) {
      query.price = {};

      if (minPrice) {
        query.price.$gte = Number(minPrice);
      }

      if (maxPrice) {
        query.price.$lte = Number(maxPrice);
      }
    }

    // 🔥 Pagination
    const skip = (page - 1) * limit;

    const products = await productModel
      .find(query)
      .populate("category")
      .skip(skip)
      .limit(Number(limit));

    const total = await productModel.countDocuments(query);

    return res.status(200).json({
      success: true,
      products,
      totalPages: Math.ceil(total / limit),
      page: Number(page),
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error: true,
    });
  }
};

// get All Products By Rating
const getAllProductsByRating = async (req, res) => {
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

    let products = [];

    if (req.query.catId !== undefined) {
      products = await productModel
        .find({
          rating: req.query.rating,
          catId: req.query.catId,
        })
        .populate("category")
        .skip((page - 1) * perPage)
        .limit(perPage)
        .exec();
    }

    if (req.query.subCatId !== undefined) {
      products = await productModel
        .find({
          rating: req.query.rating,
          subCatId: req.query.subCatId,
        })
        .populate("category")
        .skip((page - 1) * perPage)
        .limit(perPage)
        .exec();
    }

    if (req.query.thirdSubCatId !== undefined) {
      products = await productModel
        .find({
          rating: req.query.rating,
          thirdSubCatId: req.query.thirdSubCatId,
        })
        .populate("category")
        .skip((page - 1) * perPage)
        .limit(perPage)
        .exec();
    }

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

// get all products count
const getAllProductsCount = async (req, res) => {
  try {
    const productsCount = await productModel.countDocuments();

    if (!productsCount) {
      return res.json({
        error: true,
        success: false,
      });
    }

    return res.status(200).json({
      success: true,
      error: false,
      productCounts: productsCount,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};

// get All features products
const getAllFeaturedProducts = async (req, res) => {
  try {
    const products = await productModel
      .find({
        isFeatured: true,
      })
      .populate("category");

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
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};

// delete Product
const deleteProduct = async (req, res) => {
  try {
    const product = await productModel
      .findById(req.params.id)
      .populate("category");

    if (!product) {
      return res.status(404).json({
        message: "Product not found!",
        error: true,
      });
    }

    // 🔥 Delete images from Cloudinary
    if (product.images && product.images.length > 0) {
      for (const img of product.images) {
        if (img.public_id) {
          const result = await cloudinary.uploader.destroy(img.public_id);
          console.log("Deleted:", result);
        }
      }
    }

    await productModel.findByIdAndDelete(req.params.id);

    return res.status(200).json({
      success: true,
      message: "Product deleted successfully",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error: true,
      success: false,
    });
  }
};

// get Single Product
const getSingleProduct = async (req, res) => {
  try {
    const product = await productModel
      .findById(req.params.id)
      .populate("category");

    if (!product) {
      return res.status(404).json({
        message: "The Product is not found",
        error: true,
        success: false,
      });
    }

    return res.status(200).json({
      success: true,
      error: false,
      product: product,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.msg || error,
      error: true,
      success: false,
    });
  }
};

//delete Images
const removeImageAvatarFromCloudinary = async (req, res) => {
  try {
    const imgUrl = req.query.img;

    if (!imgUrl) {
      return res.status(400).json({
        message: "Image URL required",
        error: true,
        success: false,
      });
    }

    // Extract public_id properly
    const urlArr = imgUrl.split("/");
    const image = urlArr.slice(-2).join("/");
    // e.g. products/abc123.jpg

    const publicId = image.split(".")[0];
    // products/abc123

    // Delete from Cloudinary
    const result = await cloudinary.uploader.destroy(publicId);

    return res.json({
      message: "Image deleted successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

//update Product
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const body = req.body || {};

    const product = await productModel.findById(productId);

    if (!product) {
      return res.status(404).json({
        message: "Product not found",
        error: true,
      });
    }

    let updatedImages = product.images; // default = old images

    // If new images sent → replace old images
    if (body.images) {
      const newImages =
        typeof body.images === "string" ? JSON.parse(body.images) : body.images;

      //Delete old images from Cloudinary
      if (product.images && product.images.length > 0) {
        for (const img of product.images) {
          if (img.public_id) {
            await cloudinary.uploader.destroy(img.public_id);
          }
        }
      }

      updatedImages = newImages;
    }

    const updatedProduct = await productModel.findByIdAndUpdate(
      productId,
      {
        name: body.name,
        description: body.description,
        images: updatedImages,
        brand: body.brand,
        price: Number(body.price),
        oldPrice: Number(body.oldPrice),
        catId: body.catId,
        catName: body.catName,
        subCatId: body.subCatId,
        subCatName: body.subCatName,
        thirdSubCatId: body.thirdSubCatId,
        thirdSubCatName: body.thirdSubCatName,
        countInStock: Number(body.countInStock),
        rating: Number(body.rating),
        isFeatured: body.isFeatured,
        discount: Number(body.discount),
        productRam: body.productRam,
        size: body.size,
        productWeight: body.productWeight,
      },
      { new: true },
    );

    return res.status(200).json({
      message: "Product Updated Successfully",
      success: true,
      product: updatedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
      error: true,
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
  getAllProductsByThirdLevelCatName,
  getAllProductsByPrice,
  getAllProductsByRating,
  getAllProductsCount,
  getAllFeaturedProducts,
  deleteProduct,
  getSingleProduct,
  removeImageAvatarFromCloudinary,
  updateProduct
};
