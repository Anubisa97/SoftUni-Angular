const mongoose = require("mongoose");
const { ObjectId } = mongoose.Schema.Types;

const articleSchema = new mongoose.Schema(
  {
    articleName: {
      type: String,
      required: true,
    },
    articleContent: {
      type: String,
      required: true,
    },
    articleMedia: {
      type: String,
      required: true,
    },
    userId: {
      type: ObjectId,
      ref: "User",
    },
  },
  { timestamps: { createdAt: "created_at" } }
);

module.exports = mongoose.model("Article", articleSchema);
