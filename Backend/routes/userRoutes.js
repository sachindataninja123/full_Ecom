const express = require("express");
const {
  registerUser,
  verifyEmail,
  loginUser,
  logoutUser,
  userimageAvatar,
  removeImageAvatarFromCloudinary,
  updateUserDetails,
  forgotpassword,
  verifyForgotPassword,
  resetPassword,
} = require("../controllers/userControllers");
const auth = require("../middlewares/auth");
const upload = require("../middlewares/multer");
const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/verifyEmail", verifyEmail);
userRouter.post("/login", loginUser);
userRouter.get("/logout", auth, logoutUser);
userRouter.post("/forgot-password", forgotpassword);
userRouter.post("/verify-forgot-password-otp", verifyForgotPassword);
userRouter.put("/reset-password", resetPassword);
userRouter.put("/user-avatar", auth, upload.single("avatar"), userimageAvatar);
userRouter.delete("/deleteimage", auth, removeImageAvatarFromCloudinary);
userRouter.put("/:id", auth, updateUserDetails);

module.exports = userRouter;
