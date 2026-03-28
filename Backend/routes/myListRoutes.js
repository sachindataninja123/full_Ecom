const express = require("express");
const auth = require("../middlewares/auth");
const {
  addToMyList,
  deleteToMyList,
  getAllMyList,
} = require("../controllers/myListController");

const myListRouter = express.Router();

myListRouter.post("/add", auth, addToMyList);
myListRouter.get("/", auth, getAllMyList);
myListRouter.delete("/:id", auth, deleteToMyList);

module.exports = myListRouter;
