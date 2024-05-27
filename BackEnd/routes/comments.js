var express = require('express');
var router = express.Router();
var CommentsController = require('../controllers/CommentsController');


router.get('/', CommentsController.getAllComments);


module.exports = router;