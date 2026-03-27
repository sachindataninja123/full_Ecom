const express = require("express");
const {
  createCategory,
  getAllCategory,
  getAllCategoryCount,
  getSubCategoryCount,
  getSingleCategory,
  removeImageAvatarFromCloudinary,
  deleteCategory,
  UpdateCategory,
} = require("../controllers/categoryController");
const auth = require("../middlewares/auth");
const upload = require("../middlewares/multer");

const categoryRouter = express.Router();

categoryRouter.post("/create", auth, upload.array("images"), createCategory);
categoryRouter.get("/", getAllCategory);
categoryRouter.get("/get/count", getAllCategoryCount);
categoryRouter.get("/get/count/subCat", getSubCategoryCount);
categoryRouter.get("/:id", getSingleCategory);
categoryRouter.delete("/deleteImages", removeImageAvatarFromCloudinary);
categoryRouter.delete("/:id", auth, deleteCategory);
categoryRouter.put("/:id", auth, upload.array("images"), UpdateCategory);

module.exports = categoryRouter;
