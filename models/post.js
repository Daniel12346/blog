const mongoose = require("mongoose");
const moment = require("moment");
const { truncateText } = require("../utils/utils");

const postSchema = new mongoose.Schema({
  title: { type: String, required: true, trim: true },
  imgUrl: { type: String },
  content: { type: String, required: true },
  creationDate: { type: Date, default: new Date() }
});

postSchema.methods.timeSinceCreation = function() {
  return moment(this.creationDate).fromNow();
};

postSchema.methods.formattedCreationDate = function() {
  return moment(this.creationDate).format("MMMM D,    h:m a");
};

//returns the shortened text with an added ellipsis
postSchema.methods.truncatedContent = function() {
  return truncateText(this.content, 15);
};

postSchema.methods.urlToPost = function() {
  return `/posts/${this._id}`;
};

postSchema.methods.urlToPostEdit = function() {
  return `/posts/${this._id}/edit`;
};

postSchema.methods.stringId = function() {
  return String(this._id);
};

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
