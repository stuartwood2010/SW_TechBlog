const { Comment } = require('../models');
module.exports = {
	getAllComments: async (req, res) => {
		if (!req.session.loggedIn) {
			return res.redirect('/login');
		}
		try {
			const postCommentData = await Comment.findAll({
                where: {
                    blogId: req.session.blogpost.id
                }
            });
			res.render('comments', {
				postComments: postCommentData.map(postComment => postComment.get({ plain: true })),
				user: req.session.user,
			});
		} catch (e) {
			res.json(e);
		}
	},
	createComment: async (req, res) => {
		const { text } = req.body;
		try {
			const newComment = await Comment.create({
				text,
				createdBy: req.session.user.id,
                blogId: req.session.blogpost.id
			});
			res.json({ newPost });
		} catch (e) {
			res.json(e);
		}
	},
}