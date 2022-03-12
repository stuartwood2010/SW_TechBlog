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
			const post = postData.get({ plain: true })
			const comments = post.comments
			res.render('singlePost', {
				post,
				comments
			});
		} catch (error) {
			res.json(error);
		}	
	},
	deletePostById: async (req, res) => {
		const { postId } = req.params;
		try {
			console.log(postId);
			const deletedPost = await BlogPost.destroy({
				where: {
					id: postId,
				}
			});
			res.json(deletedPost);
		} catch (error) {
			res.json(error);
		}
	},
	updatePost: async (req, res) => {
		const { postId } = req.params;
		try {
			console.log(postId);
			const updatedPost = await BlogPost.update(req.body, {
				where: {
					id: postId,
				},				
			})
			res.json(updatedPost);
		} catch (error) {
			res.json(error);
		}
	}
}