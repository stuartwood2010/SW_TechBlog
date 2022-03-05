const { BlogPost, User, Comment } = require('../models');
module.exports = {
	getAllPosts: async (req, res) => {
		if (!req.session.loggedIn) {
			return res.redirect('/login');
		}
		try {
			const userPostData = await BlogPost.findAll({
				where: { 
					user_id: req.session.user_id
				},
				include: [{
					model: User,
				},{
					model: Comment,
				}]
			});
			const posts = userPostData.map(userPost => userPost.get({ plain: true }));
			console.log(posts);
			res.render('posts', {
				userPosts: posts,			
				user: req.session.user,
			});
		} catch (e) {
			res.json(e);
		}
	},
	createPost: async (req, res) => {
		const { title, content } = req.body;
		console.log(title, content, req.session.username);
		// try {
			const newPost = await BlogPost.create({
				title,
                content,
				user_id: req.session.user_id
			});
			res.json({ newPost });
		// } catch (e) {
		// 	res.json(e);
		// }
	},
}