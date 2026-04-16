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
  refreshToken,
  userDetails,
  changePassword,
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
userRouter.post("/reset-password", resetPassword);
userRouter.put("/change-password", auth, changePassword);

userRouter.post("/refresh-token", refreshToken);
userRouter.put("/user-avatar", auth, upload.single("avatar"), userimageAvatar);
userRouter.delete("/deleteimage", auth, removeImageAvatarFromCloudinary);
userRouter.put("/:id", auth, updateUserDetails);
userRouter.get("/user-details", auth, userDetails);

module.exports = userRouter;
