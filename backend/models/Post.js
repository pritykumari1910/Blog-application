// const mongoose = require('mongoose');

// const PostSchema = new mongoose.Schema({
//   title: String,
//   content: String,
//   author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }
// }, { timestamps: true });

// module.exports = mongoose.model('Post', PostSchema);

const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  title: String,
  content: String,
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  }
});

module.exports = mongoose.model('Post', postSchema);

