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
			
			res.render('dashboard', {
				userPosts: posts,			
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
				user_id: req.session.user_id
			});
			res.json({ newPost });
		} catch (e) {
			res.json(e);
		}
	},
	getPostbyId: async (req, res) => {
		if (!req.session.loggedIn) {
			return res.redirect('/login');
		}
		const { postId } = req.params;
		try {
			const postData = await BlogPost.findByPk(
				postId,
				{
					include: [{
						model: User,
					},{
						model: Comment,
						include: [User],
					}]
				}
			);
			console.log(postData, 60)
			const post = postData.get({ plain: true })
			const comments = post.comments
			console.log(comments, 63)
			res.render('singlePost', {
				post,
				comments
			});
		} catch (error) {
			res.json(error);
		}	
	},
}