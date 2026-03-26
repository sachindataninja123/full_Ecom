const express = require("express");
const {
  registerUser,
  verifyEmail,
  loginUser,
  logoutUser,
} = require("../controllers/userControllers");
const auth = require("../middlewares/auth");
const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/verifyEmail", verifyEmail);
userRouter.post("/login", loginUser);
userRouter.get("/logout", auth, logoutUser);

module.exports = userRouter;
