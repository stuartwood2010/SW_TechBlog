const { BlogPost, User, Comment } = require('../models');
module.exports = {
	// getPostComments: async (req, res) => {
	// 	if (!req.session.loggedIn) {
	// 		return res.redirect('/login');
	// 	}
	// 	// try {
	// 		const { postId } = req.params;
	// 		const postCommentData = await Comment.findAll({
    //             where: {
    //                 blog_id: postId,
    //             },
	// 			include: [
	// 			{
	// 				model: User,
	// 			},
	// 			{
	// 				model: BlogPost,
	// 			}]
    //         });
	// 		const comments = postCommentData.map(postComment => postComment.get({ plain: true }));
	// 		console.log(comments);
	// 		res.render('singlePost', {
	// 			postComments: comments,
	// 			post: req.session.post
	// 		});
	// 		// res.json(comments)
	// 	// } catch (e) {
	// 	// 	res.json(e);
	// 	// }
	// },
	createComment: async (req, res) => {
		const { text } = req.body;
		try {
			const newComment = await Comment.create({
				text,
				user_id: req.session.user_id,
                blog_id: req.session.post
			});
			res.json({ newComment });
		} catch (e) {
			res.json(e);
		}
	},
}