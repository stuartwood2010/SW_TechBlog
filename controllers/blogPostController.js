const { BlogPost } = require('../models');
module.exports = {
	getAllPosts: async (req, res) => {
		if (!req.session.loggedIn) {
			return res.redirect('/login');
		}
		try {
			const userPostData = await BlogPost.findAll();
			res.render('posts', {
				userPosts: userPostData.map(userPost => userPost.get({ plain: true })),
				user: req.session.user,
			});
		} catch (e) {
			res.json(e);
		}
	},
	createPost: async (req, res) => {
		const { title, content } = req.body;
		try {
			const newPost = await BlogPost.create({
				title,
                content,
				createdBy: req.session.user.id,
			});
			res.json({ newPost });
		} catch (e) {
			res.json(e);
		}
	},
}