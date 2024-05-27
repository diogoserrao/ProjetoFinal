var express = require('express');
var router = express.Router();
var PostsController = require('../controllers/PostsController');


router.get('/', PostsController.getAllPosts);

router.post('/NewPost', PostsController.createPost);

router.delete('/DeletePost', PostsController.deletePost);

router.put('/UpdatePost', PostsController.updatePost);

module.exports = router;