const router = require('express').Router();
const {
	getAllPosts,
    createPost,
    getPostbyId
} = require('../../../controllers/blogPostController');

router.route('/')
    .get(getAllPosts)
    .post(createPost)

router.route('/:postId')
    .get(getPostbyId)
	
module.exports = router;