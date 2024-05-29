var express = require('express');
var router = express.Router();
var PostsController = require('../controllers/PostsController');


router.get('/', PostsController.getAllPosts);

router.post('/', PostsController.createPost);

router.delete('/', PostsController.deletePost);

router.put('/', PostsController.updatePost);

module.exports = router;