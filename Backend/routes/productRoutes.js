const express = require("express");

const auth = require("../middlewares/auth");
const upload = require("../middlewares/multer");
const {
  uploadProductImages,
  createProduct,
  getAllProducts,
  getAllProductsByCatId,
  getAllProductsByCatName,
  getAllProductsBySubCatId,
  getAllProductsBySubCatName,
  getAllProductsByPrice,
  getAllProductsByRating,
  getAllProductsCount,
  getAllFeaturedProducts,
  deleteProduct,
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
productRouter.get("/getAllProductsByCatId/:id", getAllProductsByCatId);
productRouter.get("/getAllProductsByCatName", getAllProductsByCatName);
productRouter.get("/getAllProductsBySubCatId/:id", getAllProductsBySubCatId);
productRouter.get("/getAllProductsBySubCatName", getAllProductsBySubCatName);
productRouter.get(
  "/getAllProductsByThirdLevelCatId/:id",
  getAllProductsBySubCatId,
);
productRouter.get(
  "/getAllProductsByThirdLevelCatName",
  getAllProductsBySubCatName,
);
productRouter.get("/getAllProductsByPrice", getAllProductsByPrice);
productRouter.get("/getAllProductsByRating", getAllProductsByRating);
productRouter.get("/getAllProductsCount", getAllProductsCount);
productRouter.get("/getAllFeaturedProducts", getAllFeaturedProducts);
productRouter.delete("/:id", deleteProduct);

module.exports = productRouter;
