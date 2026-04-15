const userModel = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmailFunc = require("../config/send.Email");
const EmailVerificationTemplate = require("../utils/verifyEmailTemplate");
const generateAccessToken = require("../utils/generateAccessToken");
const generateRefreshToken = require("../utils/generateRefreshToken");

const cloudinary = require("cloudinary").v2;
const fs = require("fs");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CONFIG_CONFIG_NAME,
  api_key: process.env.CLOUDINARY_CONFIG_API_KEY,
  api_secret: process.env.CLOUDINARY_CONFIG_API_SECRET,
  secure: true,
});

// registerUser controller
const registerUser = async (req, res) => {
  try {
    let user;

    const { email, name, password } = req.body;

    if (!name || !email || !password) {
      return res.status(500).json({
        message: "Provide email , password , name",
        error: true,
        success: false,
      });
    }

    user = await userModel.findOne({ email: email });

    if (user) {
      return res.json({
        message: "User Already Exists!",
        error: true,
        success: false,
      });
    }

    const verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(password, salt);

    user = new userModel({
      email: email,
      name: name,
      password: hashPassword,
      otp: verifyCode,
      otpExpires: Date.now() + 600000,
    });

    await user.save();

    await sendEmailFunc({
      to: email,
      subject: "Verify email from ecommerce App",
      text: "",
      html: EmailVerificationTemplate(name, verifyCode),
    });

    // create a JWT Token
    const token = jwt.sign(
      { email: user.email, id: user._id },
      process.env.JSON_WEB_TOKEN_SECRET_KEY,
    );

    return res.status(200).json({
      success: true,
      error: false,
      message: "User registered successfully! please verify your email.",
      token: token,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

// VerifyEmailUser controller
const verifyEmail = async (req, res) => {
  try {
    const { email, otp } = req.body;
    const user = await userModel.findOne({ email: email });

    if (!user) {
      return res.status(400).json({
        error: true,
        success: false,
        message: "User not found",
      });
    }

    // otp comparison
    const isCodeValid = user.otp == otp;

    // expiry checked
    const isNotExpired = user.otpExpires > Date.now();

    if (isCodeValid && isNotExpired) {
      user.verify_email = true;
      user.otp = null;
      user.otpExpires = null;
      await user.save();
      return res.status(200).json({
        error: false,
        success: true,
        message: "Email verified successfully",
      });
    } else if (!isCodeValid) {
      return res.status(400).json({
        error: true,
        success: false,
        message: "Invalid OTP",
      });
    } else {
      return res.status(400).json({
        error: true,
        success: false,
        message: "OTP Expired",
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

// loginUser controller
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await userModel.findOne({ email: email });

    if (!user) {
      return res.status(400).json({
        error: true,
        success: false,
        message: "User not registered",
      });
    }
    if (user.status !== "Active") {
      return res.status(400).json({
        error: true,
        success: false,
        message: "Contact to admin",
      });
    }

    if (user.verify_email !== true) {
      return res.status(400).json({
        message: "Your Email is not verify yet please verify your email first",
        error: true,
        success: false,
      });
    }

    const checkPassword = await bcryptjs.compare(password, user.password);

    if (!checkPassword) {
      return res.status(400).json({
        message: "Check your password",
        error: true,
        success: false,
      });
    }

    const accessToken = await generateAccessToken(user._id);
    const refreshToken = await generateRefreshToken(user._id);

    const updateUser = await userModel.findByIdAndUpdate(user?._id, {
      last_login_date: new Date(),
      refresh_token: refreshToken,
    });

    const cookiesOption = {
      httpOnly: true,
      secure: true,
      samesite: "None",
    };

    res.cookie("accessToken", accessToken, cookiesOption);
    res.cookie("refreshToken", refreshToken, cookiesOption);

    return res.json({
      message: "Login successfully",
      error: false,
      success: true,
      data: {
        accessToken,
        refreshToken,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

// logOutUser controller
const logoutUser = async (req, res) => {
  try {
    const userId = req.userId;
    // console.log(userId);

    if (!userId) {
      return res.status(401).json({
        message: "Unauthorized",
        success: false,
      });
    }

    const cookiesOption = {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "Lax",
    };

    res.clearCookie("accessToken", cookiesOption);
    res.clearCookie("refreshToken", cookiesOption);

    await userModel.findByIdAndUpdate(userId, {
      $unset: { refresh_token: 1 },
    });

    return res.json({
      message: "Logout successfully",
      success: true,
    });
  } catch (error) {
    console.error("LOGOUT ERROR:", error); // 👈 ADD THIS
    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

//UplaodUserImage controller
const userimageAvatar = async (req, res) => {
  try {
    const userId = req.userId; // from auth middleware
    const file = req.file; // multer single upload

    // Check file
    if (!file) {
      return res.status(400).json({
        message: "Image is required",
        error: true,
        success: false,
      });
    }

    // Find user
    const user = await userModel.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
        error: true,
        success: false,
      });
    }

    // Upload & Replace (overwrite)
    const result = await cloudinary.uploader.upload(file.path, {
      public_id: user.avatar_public_id || `users/${userId}`,
      folder: "users",
      overwrite: true, // THIS REPLACES OLD IMAGE
    });

    // Delete local file
    if (fs.existsSync(file.path)) {
      fs.unlinkSync(file.path);
    }

    // Save in DB
    user.avatar = result.secure_url;
    user.avatar_public_id = result.public_id;
    await user.save();

    // Response
    return res.status(200).json({
      message: "Avatar updated successfully",
      id: userId,
      error: false,
      success: true,
      data: {
        avatar: result.secure_url,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

// remove image controller
const removeImageAvatarFromCloudinary = async (req, res) => {
  try {
    const imgUrl = req.query.img;

    if (!imgUrl) {
      return res.status(400).json({
        message: "Image URL required",
        error: true,
        success: false,
      });
    }

    // Extract public_id properly
    const urlArr = imgUrl.split("/");
    const image = urlArr.slice(-2).join("/");
    // e.g. products/abc123.jpg

    const publicId = image.split(".")[0];
    // products/abc123

    // Delete from Cloudinary
    const result = await cloudinary.uploader.destroy(publicId);

    return res.json({
      message: "Image deleted successfully",
      success: true,
      data: result,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

// update user Details controller
const updateUserDetails = async (req, res) => {
  try {
    const userId = req.userId; // auth middleware
    const { name, email, mobile, password } = req.body;

    const userExist = await userModel.findById(userId);
    if (!userExist) {
      return res.status(400).send("The user cannot be updated");
    }

    let verifyCode = "";

    if (email !== userExist.email) {
      verifyCode = Math.floor(100000 + Math.random() * 900000).toString();
    }

    let hashPassword = "";

    if (password) {
      const salt = await bcryptjs.genSalt(10);
      hashPassword = await bcryptjs.hash(password, salt);
    } else {
      hashPassword = userExist.password;
    }

    const updateUser = await userModel.findByIdAndUpdate(
      userId,
      {
        name: name,
        mobile: mobile,
        email: email,
        verify_email: email !== userExist.email ? false : true,
        password: hashPassword,
        otp: verifyCode !== "" ? verifyCode : null,
        otpExpires: verifyCode !== "" ? Date.now() + 600000 : "",
      },
      {
        new: true,
      },
    );

    if (email !== userExist.email) {
      // send verification mail
      await sendEmailFunc({
        to: email,
        subject: "Verify email from ecommerce App",
        text: "",
        html: EmailVerificationTemplate(name, verifyCode),
      });
    }

    return res.json({
      message: "User Updated successfully",
      error: false,
      success: true,
      user: {
        name: updateUser?.name,
        _id: updateUser?._id,
        email: updateUser?.email,
        mobile: updateUser?.mobile,
        avatar: updateUser?.avatar,
        address_details: updateUser?.address_details,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

// forgot Password controller
const forgotpassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await userModel.findOne({ email: email });

    if (!user) {
      return res.status(400).json({
        message: "Email not available",
        error: true,
        success: false,
      });
    } else {
      let verifyCode = Math.floor(100000 + Math.random() * 900000).toString();

      user.otp = verifyCode;
      user.otpExpires = Date.now() + 600000;

      await user.save();

      // send verification mail
      await sendEmailFunc({
        to: email,
        subject: "Verify OTP for Forgot password by Fably",
        text: "",
        html: EmailVerificationTemplate(user?.name, verifyCode),
      });

      return res.json({
        message: "Check your Email",
        error: false,
        success: true,
      });
    }
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

//Verify Forgot Password controller
const verifyForgotPassword = async (req, res) => {
  try {
    const { email, otp } = req.body;

    // Validate input first
    if (!email || !otp) {
      return res.status(400).json({
        message: "Provide required field email, otp",
        error: true,
        success: false,
      });
    }

    const user = await userModel.findOne({ email });

    if (!user) {
      return res.status(400).json({
        message: "Email not available",
        error: true,
        success: false,
      });
    }

    // Check OTP
    if (otp !== user.otp) {
      return res.status(400).json({
        message: "Invalid OTP",
        error: true,
        success: false,
      });
    }

    // Check expiry
    if (user.otpExpires < Date.now()) {
      return res.status(400).json({
        message: "OTP is expired",
        error: true,
        success: false,
      });
    }

    // Clear OTP
    user.otp = null;
    user.otpExpires = null;

    await user.save();

    return res.status(200).json({
      message: "OTP verified successfully!",
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

// resetPassord controller
const resetPassword = async (req, res) => {
  try {
    const { email, newPassword, confirmPassword } = req.body;

    // check input fields
    if (!email || !newPassword || !confirmPassword) {
      return res.status(400).json({
        message: "Provide required field email, newPassword , confirmPassword",
        error: true,
        success: false,
      });
    }

    const user = await userModel.findOne({ email });
    // check user
    if (!user) {
      return res.status(400).json({
        message: "Email not available",
        error: true,
        success: false,
      });
    }

    // const checkPassword = await bcryptjs.compare(oldPassword, user.password);
    // if (!checkPassword) {
    //   return res.status(400).json({
    //     message: "Your old Password is wrong!",
    //     error: true,
    //     success: false,
    //   });
    // }

    if (newPassword !== confirmPassword) {
      return res.status(400).json({
        message: "newPassword and confirmPassword must be same",
        error: true,
        success: false,
      });
    }

    const salt = await bcryptjs.genSalt(10);
    const hashPassword = await bcryptjs.hash(confirmPassword, salt);

    user.password = hashPassword;
    await user.save();

    return res.status(200).json({
      message: "Password updated Successfully!",
      error: false,
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

//RefreshToken controller
const refreshToken = async (req, res) => {
  try {
    const refreshToken =
      req.cookies.refreshToken || req?.headers?.authorization?.split(" ")[1]; /// [Bearer Token]

    if (!refreshToken) {
      return res.status(401).json({
        message: "Invalid Token",
        error: true,
        success: false,
      });
    }

    const verifyToken = await jwt.verify(
      refreshToken,
      process.env.SECRET_KEY_REFRESH_TOKEN,
    );

    if (!verifyToken) {
      return res.status(401).json({
        message: "Token is expired",
        error: true,
        success: false,
      });
    }

    const userId = verifyToken?._id;
    const newAccessToken = await generateAccessToken(userId);

    const cookiesOption = {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    };

    res.cookie("accessToken", newAccessToken, cookiesOption);

    return res.status(200).json({
      message: "New Access Token generated",
      success: true,
      error: false,
      data: {
        accessToken: newAccessToken,
      },
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

// getUser Details controller
const userDetails = async (req, res) => {
  try {
    const userId = req.userId;
    console.log(userId);

    const user = await userModel
      .findById(userId)
      .select("-password -refresh_token");

    return res.status(200).json({
      message: "User Details",
      data: user,
      success: true,
      error: false,
    });
  } catch (error) {
    return res.status(500).json({
      message: error.message || error,
      error: true,
      success: false,
    });
  }
};

module.exports = {
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
};
