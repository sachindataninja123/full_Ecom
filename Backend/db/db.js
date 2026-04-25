const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);

    console.log("database connection successfully");
  } catch (error) {
    console.log("error in database connection", error);
  }
};


module.exports = connectDb;
