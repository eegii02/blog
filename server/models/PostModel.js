const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: String,
  description: String,
  file: String,
  email: String,
  
},
{
    timestamps: true
  }
);

const PostModel = mongoose.model("posts", PostSchema);

module.exports = PostModel;
