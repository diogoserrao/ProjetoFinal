var express = require('express');
var router = express.Router();
var PostsController = require('../controllers/PostsController');


router.get('/', PostsController.getAllPosts);

router.post('/', PostsController.createPost);

router.delete('/:id', PostsController.deletePost);

router.put('/:id', PostsController.updatePost);

module.exports = router;