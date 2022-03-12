const router = require('express').Router();
const {
	getAllPosts,
    createPost,
    getPostbyId,
    deletePostById,
    updatePost
} = require('../../../controllers/blogPostController');

router.route('/')
    .get(getAllPosts)
    .post(createPost)

router.route('/:postId')
    .get(getPostbyId)
    .delete(deletePostById)
	.put(updatePost)
    
module.exports = router;