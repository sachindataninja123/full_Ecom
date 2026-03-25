const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

const generateRefreshToken = async (userId) => {
  const token = await jwt.sign(
    { id: userId },
    process.env.SECRET_KEY_REFRESH_TOKEN,
    { expiresIn: "7d" },
  );

  const updateRefreshTokenUser = await userModel.updateOne(
    { _id: userId },
    {
      refresh_token: token,
    },
  );

  return token;
};

module.exports = generateRefreshToken;
