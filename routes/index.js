const router = require('express').Router();
const apiRoutes = require('./api');
const { renderHomePage,  loginView, signupView, logout } = require('../controllers/userController');
const { getAllPosts } = require('../controllers/blogPostController');

router.get('/', renderHomePage);
router.get('/dashboard', getAllPosts);
router.get('/login', loginView);
router.get('/signup', signupView);
router.get('/logout', logout);
router.use('/api', apiRoutes);

module.exports = router;