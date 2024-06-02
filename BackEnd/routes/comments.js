var express = require('express');
var router = express.Router();
var CommentsController = require('../controllers/CommentsController');


router.get('/', CommentsController.getAllComments);

router.post('/', CommentsController.createComment);

router.delete('/:id', CommentsController.deleteComment);

router.put('/:id', CommentsController.updateComment);


module.exports = router;