const { response } = require("express");
const userModel = require("../../../models/user.model");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");
const sendEmailFunc = require("../config/send.Email");

const registerUser = async (req, res) => {
  try {
    let user;

    const { email, name, password } = req.body;
    if (!name || !email || !password) {
      return response.status(500).json({
        message: "Provide email , password , name",
        error: true,
        success: false,
      });
    }

    user = await userModel.findOne({ email: email });

    if (user) {
      return response.json({
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
    });

    await user.save();

    const verifyEmail = await sendEmailFunc({
      sendTo: email,
      subject: "Verify email from ecommerce App",
      html: "",
    });


  } catch (error) {}
};

module.exports = { registerUser };
