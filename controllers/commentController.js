const { BlogPost, User, Comment } = require('../models');
module.exports = {
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