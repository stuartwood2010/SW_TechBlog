const router = require('express').Router();
const apiRoutes = require('./api');
const { renderHomePage, loginView, signupView } = require('../controllers/userController');
const { getAllPosts } = require('../controllers/blogPostController');
const { getAllComments } = require('../controllers/commentController');
router.get('/', renderHomePage);
// router.get('/blogPosts', getAllPosts);
// router.get('/comments', getAllComments);
router.get('/login', loginView);
router.get('/signup', signupView);
// router.use('/api', apiRoutes);

module.exports = router;