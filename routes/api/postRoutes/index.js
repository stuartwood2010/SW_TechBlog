const router = require('express').Router();
const {
	getAllPosts,
    createPost,
    getPostbyId
} = require('../../../controllers/blogPostController');
// const { getPostComments } = require('../../../controllers/commentController');

// router.get('/:postId', getPostComments);

router.route('/')
    .get(getAllPosts)
    .post(createPost)

router.route('/:postId')
    .get(getPostbyId)
	
module.exports = router;