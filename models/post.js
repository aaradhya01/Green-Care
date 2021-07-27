const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const post = new Schema({
  content: String,
  username: String,
  userid: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  image: String,
});

const Post = mongoose.model("Post", post);
module.exports = Post;
