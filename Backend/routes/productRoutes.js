const express = require("express");

const auth = require("../middlewares/auth");
const upload = require("../middlewares/multer");
const {
  uploadProductImages,
  createProduct,
  getAllProducts,
} = require("../controllers/productController");

const productRouter = express.Router();

productRouter.post(
  "/uploadImages",
  auth,
  upload.array("images"),
  uploadProductImages,
);
productRouter.post("/create", auth, createProduct);
productRouter.get("/getAllProducts", getAllProducts);

module.exports = productRouter;
