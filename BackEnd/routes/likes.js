var express = require('express');
var router = express.Router();
var LikesController = require('../controllers/LikesController');

router.get('/', LikesController.getAllLikes);

router.post('/', LikesController.createLike);

router.delete('/:id', LikesController.deleteLike);

router.put('/:id', LikesController.updateLike);


module.exports = router;