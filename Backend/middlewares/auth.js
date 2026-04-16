const jwt = require("jsonwebtoken");

// const auth = async (req, res, next) => {
//   try {
//     var token =
//       req.cookies.accessToken || req?.headers?.authorization?.split(" ")[1];

//     if (!token) {
//       token = req.query.token;
//     }

//     if (!token) {
//       return res.status(401).json({
//         message: "Provide token",
//       });
//     }

//     const decode = await jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN);

//     if (!decode) {
//       return res.status(401).json({
//         message: "Unauthorized access",
//         error: true,
//         success: false,
//       });
//     }

//     req.userId = decode.id;

//     next();
//   } catch (error) {
//     return res.status(500).json({
//       message: "You have not login",
//       error: true,
//       success: false,
//     });
//   }
// };

const auth = async (req, res, next) => {
  try {
    let token =
      req.cookies.accessToken || req?.headers?.authorization?.split(" ")[1] || req.query.token;

    if (!token) {
      return res.status(401).json({
        message: "Provide token",
        error: true,
        success: false,
      });j3
    }

    const decode = jwt.verify(token, process.env.SECRET_KEY_ACCESS_TOKEN); // no need for await

    req.userId = decode.id;
    next();

  } catch (error) {
    //  Handle specific JWT errors properly
    if (error.name === "TokenExpiredError") {
      return res.status(401).json({
        message: "Token expired, please login again",
        error: true,
        success: false,
      });
    }

    if (error.name === "JsonWebTokenError") {
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
