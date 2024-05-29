var express = require('express');
var router = express.Router();
var LikesController = require('../controllers/LikesController');

router.get('/', LikesController.getAllLikes);

router.post('/', LikesController.createLike);

router.delete('/', LikesController.deleteLike);

router.put('/', LikesController.updateLike);


module.exports = router;