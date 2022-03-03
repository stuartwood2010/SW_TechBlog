const router = require('express').Router();
const {
	createUser,
	getAllUsers,
	getUserById,
	renderHomePage,
	login,
	signupHandler,
	logout,
} = require('../../../controllers/userController');

router.route('/')
	.get(getAllUsers)
	.post(createUser);

router.route('/:userId')
	.get(getUserById)

router.post('/signup', signupHandler);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;