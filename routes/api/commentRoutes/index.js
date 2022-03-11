const router = require('express').Router();
const {
	// getPostComments,
    createComment
} = require('../../../controllers/commentController');

router.route('/')
    // .get(getPostComments)
    .post(createComment)

router.route('/:commentId')

	
module.exports = router;