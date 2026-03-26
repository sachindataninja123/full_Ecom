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
} = require("../controllers/userControllers");
const auth = require("../middlewares/auth");
const upload = require("../middlewares/multer");
const userRouter = express.Router();

userRouter.post("/register", registerUser);
userRouter.post("/verifyEmail", verifyEmail);
userRouter.post("/login", loginUser);
userRouter.get("/logout", auth, logoutUser);
userRouter.put("/forgot-password", forgotpassword);
userRouter.put("/user-avatar", auth, upload.single("avatar"), userimageAvatar);
userRouter.delete("/deleteimage", auth, removeImageAvatarFromCloudinary);
userRouter.put("/:id", auth, updateUserDetails);

module.exports = userRouter;
