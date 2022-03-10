const router = require('express').Router();
const apiRoutes = require('./api');
const { renderHomePage,  loginView, signupView, logout } = require('../controllers/userController');
const { getAllPosts } = require('../controllers/blogPostController');
const { getAllComments } = require('../controllers/commentController');
router.get('/', renderHomePage);
router.get('/dashboard', getAllPosts);
router.get('/comments', getAllComments);
router.get('/login', loginView);
router.get('/signup', signupView);
router.get('/logout', logout);
router.use('/api', apiRoutes);

module.exports = router;