const express = require("express");
const { registerUser, verifyEmail } = require("../controllers/userControllers");
const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/verifyEmail", verifyEmail);

module.exports = userRouter;
