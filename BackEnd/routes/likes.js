var express = require('express');
var router = express.Router();
var LikesController = require('../controllers/LikesController');

router.get('/Likes', LikesController.getAllLikes);

router.post('/NewLike', LikesController.createLike);

router.delete('/DeleteLike', LikesController.deleteLike);

router.put('/UpdateLike', LikesController.updateLike);


module.exports = router;