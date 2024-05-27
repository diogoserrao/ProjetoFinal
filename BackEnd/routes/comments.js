var express = require('express');
var router = express.Router();
var CommentsController = require('../controllers/CommentsController');


router.get('/', CommentsController.getAllComments);

router.post('/NewComment', CommentsController.createComment);

router.delete('/DeleteComment', CommentsController.deleteComment);

router.put('/UpdateComment', CommentsController.updateComment);


module.exports = router;