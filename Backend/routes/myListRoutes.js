const express = require("express");
const auth = require("../middlewares/auth");
const { addToMyList } = require("../controllers/myListController");

const myListRouter = express.Router();

myListRouter.post("/add", auth, addToMyList);


module.exports = myListRouter
