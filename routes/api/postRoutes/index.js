const router = require('express').Router();
const {
	getAllPosts,
    createPost,
} = require('../../../controllers/blogPostController');

router.route('/')
    .get(getAllPosts)
    .post(createPost)

router.route('/:postId')

	
module.exports = router;