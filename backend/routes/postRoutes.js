// const express = require('express');
// const router = express.Router();
// const { getAllPosts, createPost, getPostById } = require('../controllers/postController');
// const auth = require('../middleware/authMiddleware');

// router.get('/', getAllPosts);
// router.post('/', auth, createPost);
// router.get('/:id', getPostById);

// module.exports = router;


// const express = require('express');
// const router = express.Router();
// const authMiddleware = require('../middleware/authMiddleware');
// const Post = require('../models/Post');

// // GET all posts by user
// router.get('/', authMiddleware, async (req, res) => {
//   const posts = await Post.find({ userId: req.user.id });
//   res.json({ posts });
// });

// // POST a new blog post
// router.post('/', authMiddleware, async (req, res) => {
//   const { title, content } = req.body;
//   const post = new Post({ title, content, userId: req.user.id });
//   await post.save();
//   res.status(201).json({ message: 'Post created', post });
// });

// router.put('/:id', authMiddleware, async (req, res) => {
//   const { title, content } = req.body;
//   try {
//     const post = await Post.findOneAndUpdate(
//       { _id: req.params.id, userId: req.user.id }, // ensures only the user's post
//       { title, content },
//       { new: true }
//     );

//     if (!post) {
//       return res.status(404).json({ message: 'Post not found or not owned by user' });
//     }

//     res.json({ message: 'Post updated successfully', post });
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ message: 'Error updating post' });
//   }
// });


// // DELETE post (secure by userId)
// router.delete('/:id', authMiddleware, async (req, res) => {

//   // --- DEBUGGING LOGS ---
//   console.log('--- ATTEMPTING TO DELETE POST ---');
//   console.log('Post ID from URL (req.params.id):', req.params.id);
//   console.log('User ID from auth token (req.user.id):', req.user.id);
//   console.log('------------------------------------');
//   // --- END DEBUGGING ---

//   try {
//     const post = await Post.findOneAndDelete({
//       _id: req.params.id,
//       userId: req.user.id // The query requires BOTH to match
//     });

//     if (!post) {
//       // This 404 means the query above found no document matching both IDs
//       return res.status(404).json({ message: 'Post not found or user is not authorized' });
//     }

//     res.json({ message: 'Post deleted' });
//   } catch (err) {
//     console.error('DELETE error:', err);
//     res.status(500).json({ message: 'Server error' });
//   }
// });

// module.exports = router;

const express = require('express');
const router = express.Router();
const auth = require('../middleware/authMiddleware');
const {
  getAllPosts,
  createPost,
  getPostById,
  updatePost,
  deletePost,
  getAllPublicPosts, // 👈 Make sure it's imported
} = require('../controllers/postController');

// ✅ PUBLIC route - NO authMiddleware
router.get('/public', getAllPublicPosts);

// 🔐 PROTECTED routes
router.get('/', auth, getAllPosts);
router.post('/', auth, createPost);
router.get('/:id', auth, getPostById);
router.put('/:id', auth, updatePost);
router.delete('/:id', auth, deletePost);

module.exports = router;
