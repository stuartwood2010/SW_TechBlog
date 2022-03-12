const router = require('express').Router();
const {
	createUser,
	login,
	logout,
} = require('../../../controllers/userController');

router.route('/')
	.post(createUser);

router.post('/signup', createUser);
router.post('/login', login);
router.post('/logout', logout);

module.exports = router;