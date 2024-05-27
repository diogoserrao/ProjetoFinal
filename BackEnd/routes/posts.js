var express = require('express');
var router = express.Router();
var PostsController = require('../controllers/PostsController');


router.get('/', PostsController.getAllPosts);


module.exports = router;