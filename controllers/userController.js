const { User, BlogPost, Comment } = require('../models');
module.exports = {
    createUser: async (req, res) => {
        const {username, email, password } = req.body;
        if (!username || !email || !password) {
			return res.status(400).json({
				error: 'You must provide a username, email, and password'
			});
		}
		try {
			const user = await User.create({
				username,
				email,
				password,
			});
			res.json(user);
		} catch (e) {
			res.json(e);
		}
    },
	renderHomePage: async (req, res) => {
			try {
				const userPostData = await BlogPost.findAll({
					include: [{
						model: User,
					},{
						model: Comment,
					}]
				});
				const posts = userPostData.map(userPost => userPost.get({ plain: true }));
				res.render('homepage', {
					posts: posts,			
					user: req.session.user,
				});
			} catch (e) {
				res.json(e);
			}
	},
	login: async (req, res) => {
		console.log(req.body);
		try {
			const userData = await User.findOne({
				where: {
					username: req.body.username
				}
			});
			const userFound = userData.get({ plain: true });

			if (userFound.password === req.body.password) {
				req.session.save(() => {
					req.session.loggedIn = true;
					req.session.user = userFound.username;
					req.session.user_id = userFound.id;
					res.json({
						success: true
					});
				});
			} else {
				res.status(400).json(e);
			}
		} catch (e) {
			res.status(400).json(e);
		}
	},
	signupHandler: async (req, res) => {
		const {	email, username, password } = req.body;
		try {
			const createdUser = await User.create({
				email,
				username,
				password,
			});
			const user = createdUser.get({ plain: true });
			req.session.save(() => {
				req.session.loggedIn = true;
				req.session.user = user.username;
				req.session.user_id = user.id;
				res.redirect('/dashboard');
			});
		} catch (e) {
			res.json(e);
		}
	},
	loginView: (req, res) => {
		if (req.session.loggedIn) {
			return res.redirect('/dashboard');
		}
		res.render('login');
	},
	signupView: (req, res) => {
		if (req.session.loggedIn) {
			return res.redirect('/dashboard');
		}
		res.render('signUp');
	},
	logout: (req, res) => {
		req.session.destroy(() => {
			res.redirect('/dashboard');
		});
	},
}