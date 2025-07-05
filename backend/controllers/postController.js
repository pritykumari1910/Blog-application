const Post = require('../models/Post');




exports.getAllPublicPosts = async (req, res) => {
  try {
    const posts = await Post.find().populate('author', 'email');
    res.json({ posts });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching public posts' });
  }
};

// GET all posts for logged-in user
exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find({ author: req.user.id });
    res.json({ posts });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching posts' });
  }
};

// CREATE a post
exports.createPost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = new Post({
      title,
      content,
      author: req.user.id,
    });
    await post.save();
    res.status(201).json({ message: 'Post created', post });
  } catch (err) {
    res.status(500).json({ message: 'Error creating post' });
  }
};

// GET post by ID
exports.getPostById = async (req, res) => {
  try {
    const post = await Post.findOne({ _id: req.params.id, author: req.user.id });
    if (!post) return res.status(404).json({ message: 'Post not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching post' });
  }
};

// UPDATE post
exports.updatePost = async (req, res) => {
  try {
    const { title, content } = req.body;
    const post = await Post.findOneAndUpdate(
      { _id: req.params.id, author: req.user.id },
      { title, content },
      { new: true }
    );

    if (!post) {
      return res.status(404).json({ message: 'Post not found or not authorized' });
    }

    res.json({ message: 'Post updated', post });
  } catch (err) {
    res.status(500).json({ message: 'Error updating post' });
  }
};

// DELETE post
exports.deletePost = async (req, res) => {
  try {
    const post = await Post.findOneAndDelete({ _id: req.params.id, author: req.user.id });

    if (!post) {
      return res.status(404).json({ message: 'Post not found or not authorized' });
    }

    res.json({ message: 'Post deleted' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting post' });
  }
};
