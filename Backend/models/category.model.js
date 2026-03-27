const mongoose = require("mongoose");

const categorySchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    images: [
      {
        type: String,
      },
    ],
    parentCatName: {
      type: String,
    },
    parentId: {
      type: mongoose.Schema.Types.ObjectId,
      default: null,
    },
  },
  {
    timestamps: true, 
  }
);

const categoryModel = mongoose.model("category", categorySchema);

module.exports = categoryModel;