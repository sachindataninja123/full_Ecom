const categoryModel = require("../models/category.model");

const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CONFIG_CONFIG_NAME,
  api_key: process.env.CLOUDINARY_CONFIG_API_KEY,
  api_secret: process.env.CLOUDINARY_CONFIG_API_SECRET,
  secure: true,
});

const createCategory = async (req, res) => {
  try {
    const files = req.files; // multer array

    if (!files || files.length === 0) {
      return res.status(400).json({
        message: "Images are required",
        error: true,
        success: false,
      });
    }

    const { name, color, parentId, parentCatName } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Category name is required",
        error: true,
        success: false,
      });
    }

    let imagesArr = [];

    for (let i = 0; i < files.length; i++) {
      const result = await cloudinary.uploader.upload(files[i].path, {
        folder: "categories", // change as needed
      });

      imagesArr.push(result.secure_url);

      // delete local file
      if (fs.existsSync(files[i].path)) {
        fs.unlinkSync(files[i].path);
      }
    }
    const category = await categoryModel.create({
      name,
      color,
      parentId,
      parentCatName,
      images: imagesArr,
    });

    if (!category) {
      return res.status(500).json({
        message: "Category not created",
        error: true,
        success: false,
      });
    }

    return res.status(200).json({
      message: "Category created successfully",

      success: true,
      error: false,
      category: category,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

const getAllCategory = async (req, res) => {
  try {
    const categories = await categoryModel.find();
    const categoryMap = {};

    categories.forEach((cat) => {
      categoryMap[cat._id] = { ...cat._doc, children: [] };
    });

    const rootCategories = [];

    categories.forEach((cat) => {
      if (cat.parentId) {
        categoryMap[cat.parentId].children.push(categoryMap[cat._id]);
      } else {
        rootCategories.push(categoryMap[cat._id]);
      }
    });

    return res.status(200).json({
      error: false,
      success: true,
      data: rootCategories,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

const getAllCategoryCount = async (req, res) => {
  try {
    const categoryCount = await categoryModel.countDocuments({
      parentId: undefined,
    });

    if (!categoryCount) {
      res.status(500).json({ success: false, error: true });
    } else {
      res.send({
        categoryCount: categoryCount,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

const getSubCategoryCount = async (req, res) => {
  try {
    const categories = await categoryModel.find();
    if (!categories) {
      res.status(500).json({ success: false, error: true });
    } else {
      const subCatList = [];
      for (let cat of categories) {
        if (cat.parentId !== undefined) {
          subCatList.push(cat);
        }
      }
      res.send({
        SubcategoryCount: subCatList.length,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

const getSingleCategory = async (req, res) => {
  try {
    const category = await categoryModel.findById(req.params.id);

    if (!category) {
      res.status(500).json({
        message: "The Category with the given ID was not found.",
        error: true,
        success: false,
      });
    }

    return res.status(200).json({
      error: false,
      success: true,
      category: category,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

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

const deleteCategory = async (req, res) => {
  try {
    const category = await categoryModel.findById(req.params.id);
    const images = category.images;

    for (img of images) {
      const imgUrl = img;
      const urlArr = imgUrl.split("/");
      const image = urlArr[urlArr.length - 1];

      const imageName = image.split(".")[0];

      if (imageName) {
        cloudinary.uploader.destroy(imageName, (error, result) => {
          // console.log(error, result)
        });
      }
    }

    const subCategory = await categoryModel.find({
      parentId: req.params.id,
    });

    for (let i = 0; i < subCategory.length; i++) {
      const thirdsubCategory = await categoryModel.find({
        parentId: subCategory[i]._id,
      });

      for (let i = 0; i < thirdsubCategory.length; i++) {
        const deleteThirdSubCat = await categoryModel.findByIdAndDelete(
          thirdsubCategory[i]._id,
        );
      }

      const deletedSubCat = await categoryModel.findByIdAndDelete(
        subCategory[i]._id,
      );
    }

    const deletedCat = await categoryModel.findByIdAndDelete(req.params.id);

    if (!deletedCat) {
      res.status(404).json({
        message: "Category not found!",
        success: false,
        error: true,
      });
    }

    res.status(200).json({
      success: true,
      error: false,
      message: "Category Deleted!",
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};


const UpdateCategory = async (req, res) => {
  try {
    const files = req.files; // ✅ array
    const body = req.body || {};

    let imagesArr = [];

    // 🔥 If new image uploaded
    if (files && files.length > 0) {
      for (let i = 0; i < files.length; i++) {
        const result = await cloudinary.uploader.upload(files[i].path, {
          folder: "categories",
        });

        imagesArr.push(result.secure_url);

        // delete local file
        if (fs.existsSync(files[i].path)) {
          fs.unlinkSync(files[i].path);
          console.log("Deleted:", files[i].path);
        }
      }
    }

    const updateData = {
      name: body.name,
      parentId: body.parentId,
      parentCatName: body.parentCatName,
    };

    // ✅ Only update image if exists
   if (imagesArr.length > 0) {
      updateData.images = imagesArr;
    }

    const category = await categoryModel.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true },
    );

    if (!category) {
      return res.status(404).json({
        message: "Category not found!",
        success: false,
      });
    }

    return res.status(200).json({
      success: true,
      error: false,
      category,
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
  createCategory,
  getAllCategory,
  getAllCategoryCount,
  getSubCategoryCount,
  getSingleCategory,
  removeImageAvatarFromCloudinary,
  deleteCategory,
  UpdateCategory,
};
