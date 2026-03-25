const userModel = require("../models/user.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmailFunc = require("../config/send.Email");
const EmailVerificationTemplate = require("../utils/verifyEmailTemplate");

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

    const isCodeValid = (user.otp = otp);
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

module.exports = { registerUser , verifyEmail };
