const jwt = require("jsonwebtoken");

const auth = async (req, res, next) => {
  try {
    const token =
      req.cookies.accessToken ||
      req?.headers?.authorization?.split(" ")[1] ||
      req.query.token;

    if (!token) {
      return res.status(401).json({
        message: "Provide token",
        error: true,
        success: false,
      }); // no stray characters after this
    }

    const decode = jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN); //  no await needed — jwt.verify is sync
    req.userId = decode.id; //  normal property access, not [decode.id](...)

    next();
  } catch (error) {
    if (error.name === "TokenExpiredError") {
      // fixed from [error.name](...)
      return res.status(401).json({
        message: "Token expired, please login again",
        error: true,
        success: false,
      });
    }
    if (error.name === "JsonWebTokenError") {
      // fixed
      return res.status(401).json({
        message: "Invalid token",
        error: true,
        success: false,
      });
    }
    return res.status(500).json({
      message: "Internal server error",
      error: true,
      success: false,
    });
  }
};

module.exports = auth;

module.exports = auth;
